const notifyByEmail = (email_address) => {
  return `Email sent to ${email_address}`;
};

const notifyByText = (phone_number) => {
  return `Text sent to ${phone_number}`;
};

const notify = (recipient, notifyFunction) => {
  return notifyFunction(recipient);
};