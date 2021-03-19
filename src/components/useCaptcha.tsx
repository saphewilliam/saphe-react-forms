import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import RecaptchaComponent from 'react-recaptcha';
import { CaptchaConfig } from '../../src/utils/fieldTypes';

interface State {
  Recaptcha: () => ReactElement;
  captchaVerified: boolean;
}

function useCaptcha(config?: CaptchaConfig): State {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    const script = document.querySelector(`script[src="${src}"]`);
    if (!script && !!config)
      console.error(
        `You are attempting to use RECAPTCHA with @saphe/react-forms, please include the following script in your document head: <script src="${src}" async defer></script>`,
      );
  }, [config]);

  const handleVerify = () => setVerified(true);
  const handleExpired = () => setVerified(false);

  const Recaptcha = useCallback(
    () => (
      <div className="mb-3">
        {!!config && (
          <RecaptchaComponent
            sitekey={config.key}
            render="explicit"
            verifyCallback={handleVerify}
            expiredCallback={handleExpired}
            hl={config.locale}
          />
        )}
      </div>
    ),
    [config],
  );

  return { Recaptcha, captchaVerified: verified || !config };
}

export default useCaptcha;
