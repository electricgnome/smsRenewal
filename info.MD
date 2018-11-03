## App summary:

Send sms/email renewal reminders to customers based on renewal date.

Ex: "Hi John, this is a friendly reminder that your account is up for renewal in 3 days for $130.00" 


### DB Strucutre:

user table:
email
password

Customers table:
ID
firstName
lastName
phone
renewalDate
price
activeNotifications


Notification table:
ID
USER_ID
service
month
createdAt
notified
Notes

### Phone.com API structure

{
    "id": "53a58467-7023-11e4-b9e5-b7869fba3bc9",
    "from": "+17327704200",
    "to": [
        {
            "number": "+17329910138",
            "status": "sent"
        }
    ],
    "direction": "out",
    "created_epoch": 1416425775,
    "created_at": "2014-11-19T19:36:15+00:00",
    "is_new": false,
    "text": "This is an outbound SMS",
    "extension": null
}



Contributors: 
Hector J. Saldana (@electricgnome)
Earle Poole (@Emjp4)
Biko Allen (@kobi1021)
Yetunde Sola-Adebayo (@yetunde79)
Joshua Medeski (@joshmedeski)