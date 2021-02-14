import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';

const withErrorHandler = (WrapperComponent, instance) => {
    return class extends React.Component {
        state = {
            error: null,
        };

        componentDidMount() {
            this.reqInterceptors = instance.interceptors.request.use((req) => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptors = instance.interceptors.response.use(
                (res) => res,
                (error) => {
                    this.setState({ error: error });
                }
            );
        }

        componentWillUnmount() {
            instance.interceptors.request.eject(this.reqInterceptors);
            instance.interceptors.response.eject(this.resInterceptors);
        }

        confirmErrorHandler = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.confirmErrorHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
