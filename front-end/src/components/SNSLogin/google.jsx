import PropTypes from 'prop-types';
import { snsPayloadParser } from '../../utils/common';
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import jwtDecode from 'jwt-decode'

const Google = (props) => {
  const clientId = process.env.REACT_APP_GOOGLE || '';

  const success = (payload) => {
    props.success(snsPayloadParser.GOOGLE(payload));
    
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!clientId) return <>.env의 REACT_APP_GOOGLE을 확인해주세요.</>

  return (
    <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        // console.log(res);
                        console.log(jwtDecode(res.credential));
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
   
  );
};

Google.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Google;