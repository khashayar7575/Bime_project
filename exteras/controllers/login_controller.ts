import { Component } from "react";
import { ProductReadDto, setData, UserDataSource, UtilitiesConstants } from "utilities_js";
import { ToastContainer, toast } from 'react-toastify';
interface IProps {
    show: boolean;
    close(): void;
}
interface IState {
    tenders?: ProductReadDto[],
    mobile?: string,
    reciveCode: boolean,
    code: string,
    loading: boolean,
    hasMobileError: boolean,
    hasCodeError: boolean,
    check?: boolean,
    termsError?: boolean,
    counter: number,
}
function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}
export class LoginController extends Component<IProps, IState> {
    userDataSource: UserDataSource = new UserDataSource(
        "https://anborapi.sinamn75.com/api/"
    );
    constructor(props: IProps) {
        super(props);
        this.state = {
            tenders: undefined,
            mobile: "",
            reciveCode: false,
            code: "",
            loading: false,
            hasMobileError: false,
            hasCodeError: false,
            check: true,
            termsError: false,
            counter: 60,

        };
    }

    async handleChangeInput(event: any) {
        this.setState({ mobile: event })
        if (this.state.code !== "" && this.state.mobile?.length === 4) {
            this.setState({ hasMobileError: false })
        }
    }
    async handleChangeCode(event: any) {
        this.setState({ code: event })
    }
    async handleChangeCheck(event: any) {
        this.setState({ check: event.target.checked })
    }
    async handleSendCode() {
        if (this.state.check === true) {
            if (this.state.mobile !== "" && this.state.mobile?.length === 11) {
                this.setState({
                    loading: true
                })
                const mobileVerification = {
                    mobile: this.state.mobile,
                    sendSMS: false
                }
                await this.userDataSource.getMobileVerificationCodeForLogin(mobileVerification, r => {
                    this.setState({
                        reciveCode: true
                    })
                    this.setState({
                        loading: false
                    })
                    this.doTimer();
                }, e => console.log(e));
            } else {
                this.setState({
                    hasMobileError: true
                })
            }
        } else {
            toast.error("Please tick above to agree terms & condition ");
        }
    }
    async handleSendCodeAgain() {
        this.setState({
            counter: 60
        })
        this.doTimer();
        const mobileVerification = {
            mobile: this.state.mobile,
            sendSMS: false
        }
        await this.userDataSource.getMobileVerificationCodeForLogin(mobileVerification,r => {
        }, e => console.log(e));
    }
    async handleLogin() {
        if (this.state.code !== "" && this.state.code?.length === 4) {
            this.setState({
                hasCodeError: false
            })
            this.setState({
                loading: true
            })
            const codeVerification = {
                mobile: this.state.mobile,
                verificationCode: this.state.code
            }
            await this.userDataSource.verifyMobileForLogin(codeVerification, r => {
                if (r && r.result) {
                    setData(UtilitiesConstants.TOKEN, `Bearer ${r.result.token}`)
                    window.localStorage.setItem("language", "Us")
                    // window.localStorage.setItem("userId",  r.result.id)
                    window.localStorage.setItem("userId", JSON.stringify(r.result.id))
                    this.setState({
                        loading: false
                    })
                    this.setState({
                        hasCodeError: false
                    })
                }
                this.handleCloseModal()
            }, e => console.log(e));
        } else {
            this.setState({
                hasCodeError: true
            })
        }
    }
    async doTimer() {
        let intervalId = setInterval(() => {
            this.setState({
                counter: this.state.counter - 1
            })
            console.log(this.state.counter);
            if (this.state.counter === 0) {
                clearInterval(intervalId)
            }
        }, 1000)
        //

    }
    handleCloseModal = () => {
        this.props.close();
        this.setState({ reciveCode: false })
        window.location.reload();
    };
}