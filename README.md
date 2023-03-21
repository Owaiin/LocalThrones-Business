# LocalThrones is a Manchester based service for promoting local venues, focusing on home-grown local industry. You can find more about it [here](https://www.instagram.com/localthronesmcr/?hl=en-gb)

The project consists of two frontends, one for everyday users and another for businesses.

Customers will be able to login using OAuth providers (just Google at the moment) and will be able to access deals and offers that are made within the Business frontend.

Customers use a QR code from the deal page, which when scanned from a Business login, will check that the QR code is valid and then add that to a count of usage for the business to track how many times a deal has been used. Each deal will have a series of pre-defined attributes to help further define the type of interests the users of the deal have. For example: Cocktails, Pizza, American. This will then help Businesses to create further deals or help them with social media ad campaign target audiences.

## TechStack
NextJS, TailwindCSS, DaisyUI, NextAuth/AuthJS, Prisma, PlanetScale NextAuth, Prisma, and PlanetScale are all hooked-up and working

## Images - (This is early days - Just getting the functionality of the QRScanner and validation working

### Scanning a QR Code

<img width="185" alt="QRScan" src="https://user-images.githubusercontent.com/20094176/226696063-b0737929-b51a-421d-9c94-1b4f50caf46c.png">

### Valid Code - Meets Requirements

<img width="185" alt="validCode" src="https://user-images.githubusercontent.com/20094176/226696151-a247ab74-b00f-4d97-b9c2-8fd1960d6a4c.png">

### Invalid Code - Doesn't meet Requirements

<img width="188" alt="invalidCode" src="https://user-images.githubusercontent.com/20094176/226696222-d2bc59aa-8883-4931-a3eb-6dbceb435a63.png">
