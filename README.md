# Javascript Frameworks - Course Assignment - Noroff

[![Netlify Status](https://api.netlify.com/api/v1/badges/19f54333-afec-4702-8c9b-bf76c74ca9b3/deploy-status)](https://app.netlify.com/sites/jade-paprenjak-6721a7/deploys)

|                                                 Home                                                 |                                               Item                                                |
| :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| ![home](https://github.com/DrRuski/js-frameworks-ca/assets/96174153/1f9d2868-cce3-47c6-86a6-70596516e23e)  |  ![item](https://github.com/DrRuski/js-frameworks-ca/assets/96174153/4b4afd34-6b52-4d9b-b24c-cebbe98cc44f)  |
|                                             Contact                                             |                                           Cart                                           |
|  ![contact](https://github.com/DrRuski/js-frameworks-ca/assets/96174153/2ef772d2-1392-4cc1-8b7c-cc14bba8480e)  |  ![cart](https://github.com/DrRuski/js-frameworks-ca/assets/96174153/734a8d4a-dd86-4892-ad64-19d683a02d10)  |

This is my javascript frameworks introductory course assignment project submission for the [Frontend Development course](https://www.noroff.no/en/studies/vocational-school/front-end-development) at Noroff School of technology and digital media.

#### Table of Contents

- [Brief](#brief)
- [Project Dev Stack](#project-development-stack)
- [Live Website Demo](#live-website-demo)
- [External Development](#external-development)

## Brief

<a name="brief"></a>
Work with the official [Noroff API Documentation](https://docs.noroff.dev/), plan, design and build a modern front-end eCom application.

### Pages:

- Homepage.
- Individual product page.
- Cart page.
- Checkout success page.

### Overarching Objectives:

1. The homepage should have a list of all the products.
2. There should be a look-ahead search bar that filters products when typing in a product name.
3. Clicking on a product should take a user to an individual product page.
4. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
5. There should be an `Add to cart` button which, upon clicking, adds the product to the cart.
6. The product page should display the `title` of the product, the `description` and the `image`. There should also be `reviews` listed for the product.
7. You should use the `discountedPrice` property to display the price of the product. If there is a difference between the `discountedPrice` and `price` properties then that means there is a discount for that product. `Calculate what this dicount is and display it on the page.`
8. The `cart page` will have a `checkout` button. Clicking this checkout button then goes to a checkout success page.
9. Checkout success page will display a message to the user `notifying` them that their order was successful.
10. The `cart` must be cleared if the user gets to the checkout success page.
11. There will be a contact page which will contain a contact form with the following fields. There must be form validation:
    - Full name (Minimum number of characters is 3, required)
    - Subject (Minimum number of characters is 3, required)
    - Email (Must be a valid email address, required)
    - Body (Minimum number of characters is 3, required)


## Project Development Stack

<a name="project-development-stack"></a>
The development stack used for this project:

- [Javascript](https://www.javascript.com/) as the programming language.
- [Tailwind](https://tailwindcss.com/) as the styling CSS framework.
- [React](https://react.dev/) as the JS framework.
- [React Router DOM](https://reactrouter.com/en/main) for routing.

## Live Website Demo

<a name="live-website-demo"></a>

Website Link:

```
https://jade-paprenjak-6721a7.netlify.app/
```

## External Development

<a name="external-development"></a>

1. Clone the repo through github app/website or use the CLI command:

```
git clone https://github.com/DrRuski/CabinQuest.git
```

2. Install dependencies:

```
npm i
```

3. Start development server:

```
npm run dev
```
