export const getInputError = ({
  hasBeenSubmitted,
  value,
}: {
  hasBeenSubmitted: boolean;
  value?: string;
}) => {
  const result =
    hasBeenSubmitted && (!value || value === '')
      ? { content: 'Required' }
      : undefined;
  return result;
};

export const getEmailError = ({
  hasBeenSubmitted,
  email,
}: {
  hasBeenSubmitted: boolean;
  email?: string;
}) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const result =
    hasBeenSubmitted && (!email || !emailRegex.test(email.toLowerCase()))
      ? { content: 'Invalid email address' }
      : undefined;

  return result;
};
