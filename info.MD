# App summary:

Send sms/email renewal reminders to customers based on renewal date.

Ex: "Hi John, this is a friendly reminder that your account is up for renewal in 3 days for $130.00"

## DB Structure:

### User Table:

email
password

### Customers Table:

firstName
lastName
phone
renewalDate
price
activeNotifications
createdBy (userId)
