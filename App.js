/**
 * Food App
 * Header
 *    - Logo
 *    - Nav Items
 *        - Home
 *        - About us
 *        - Cart
 * Body
 *    - Search
 *    - Restaurent Container
 *        - Card
 * Footer
 *    - CopyRight
 *    - Contact Us
 *    - Link
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './asset/img/logo.gif';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo } = resData.info;
  const { slaString } = resData.info.sla;
  return (
    <div className="res-card">
      <div className="res-card-logo">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        />
      </div>
      <div className="block">
        <div className="name">{name}</div>
        <div className="menu-list">{cuisines.join(', ')}</div>
        <div className="ratings">{costForTwo}</div>
        <div className="time">{slaString}</div>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '757344',
      name: 'A One Punjabi Omelette Center',
      cloudinaryImageId: '76655f96651662a032bc975b7b9a5d2b',
      locality: 'Station Road',
      areaName: 'Nai Abaadi',
      costForTwo: '₹198 for two',
      cuisines: ['Indian', 'Snacks', 'Fast Food'],
      parentId: '24777',
      avgRatingString: 'NEW',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '0.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 22:50:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/a-one-punjabi-omelette-center-station-road-nai-abaadi-mandsaur-757344',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '717283',
      name: 'New Tirupati Restaurant',
      cloudinaryImageId: '1aa2148e2a8abd14b7a21fe239685d5b',
      locality: 'Goudam colony Road',
      areaName: 'Nai Abaadi',
      costForTwo: '₹199 for two',
      cuisines: ['Beverages', 'Fast Food'],
      avgRating: 4.2,
      veg: true,
      parentId: '15815',
      avgRatingString: '4.2',
      totalRatingsString: '6',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 22:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'UPTO ₹40',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/new-tirupati-restaurant-goudam-colony-road-nai-abaadi-mandsaur-717283',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '555613',
      name: 'Chawala- Dilliwala',
      cloudinaryImageId: 'mfodsxtgyjsvvlmzdegu',
      locality: 'Dashrath Nagar',
      areaName: 'Junglighat',
      costForTwo: '₹199 for two',
      cuisines: ['Fast Food'],
      avgRating: 4.2,
      parentId: '455625',
      avgRatingString: '4.2',
      totalRatingsString: '10+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.4,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '0.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chawala-dilliwala-dashrath-nagar-junglighat-mandsaur-555613',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '548226',
      name: 'Cravings Cafe By Car Khana',
      cloudinaryImageId: 'mmi8pyv8zayceptmdbl7',
      locality: 'Rewas Dewda Road \n',
      areaName: 'Nai Abaadi',
      costForTwo: '₹200 for two',
      cuisines: ['Fast Food', 'Snacks', 'Desserts'],
      avgRating: 4.3,
      veg: true,
      parentId: '471408',
      avgRatingString: '4.3',
      totalRatingsString: '10+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/cravings-cafe-by-car-khana-rewas-dewda-road-nai-abaadi-mandsaur-548226',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '547499',
      name: 'Gujrat Fast Food',
      cloudinaryImageId: 'bfcai7gesbymodspgh2a',
      areaName: 'Nai Abaadi',
      costForTwo: '₹199 for two',
      cuisines: ['Pizzas', 'Fast Food', 'Snacks'],
      avgRating: 4.9,
      veg: true,
      parentId: '328968',
      avgRatingString: '4.9',
      totalRatingsString: '3',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/gujrat-fast-food-nai-abaadi-mandsaur-547499',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '596729',
      name: 'Shree Nath Bhojnalaya',
      cloudinaryImageId: 'w942bgwmzzcqtu8tbffc',
      locality: 'Kailash Marg',
      areaName: 'Nai Abaadi',
      costForTwo: '₹199 for two',
      cuisines: ['Indian'],
      avgRating: 3.9,
      veg: true,
      parentId: '313175',
      avgRatingString: '3.9',
      totalRatingsString: '20+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/shree-nath-bhojnalaya-kailash-marg-nai-abaadi-mandsaur-596729',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '757622',
      name: 'Anand Juice',
      cloudinaryImageId: '230f05ace4413a8ce0e789b2cf01d18b',
      locality: 'Gol Chouraha',
      areaName: 'Nai Abaadi',
      costForTwo: '₹147 for two',
      cuisines: ['Beverages'],
      veg: true,
      parentId: '447999',
      avgRatingString: 'NEW',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.3,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/anand-juice-gol-chouraha-nai-abaadi-mandsaur-757622',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '643485',
      name: 'Shree Siddhi Vinayak Fast Food And Restaurant',
      cloudinaryImageId: 'edtkej4jwyb0jghus3pc',
      locality: 'Yash Nagar',
      areaName: 'Nai Abaadi',
      costForTwo: '₹199 for two',
      cuisines: ['North Indian', 'South Indian', 'Chinese', 'Biryani'],
      avgRating: 4.3,
      veg: true,
      parentId: '388607',
      avgRatingString: '4.3',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/shree-siddhi-vinayak-fast-food-and-restaurant-yash-nagar-nai-abaadi-mandsaur-643485',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '545961',
      name: 'Sardarji Desi Flavors',
      cloudinaryImageId: 'cntnnw7utfo9mfcdyed5',
      locality: 'Shastri Colony \n',
      areaName: 'Nai Abaadi',
      costForTwo: '₹300 for two',
      cuisines: ['Chinese', 'Fast Food', 'North Indian'],
      avgRating: 4.7,
      veg: true,
      parentId: '328052',
      avgRatingString: '4.7',
      totalRatingsString: '8',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 21:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/sardarji-desi-flavors-shastri-colony-nai-abaadi-mandsaur-545961',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '620161',
      name: 'Anand Rasoi',
      cloudinaryImageId: 'ypth5lkd4shoilp4bo5x',
      areaName: 'Nai Abaadi',
      costForTwo: '₹200 for two',
      cuisines: ['North Indian', 'Thalis', 'Chinese', 'Biryani'],
      avgRating: 3.9,
      veg: true,
      parentId: '289155',
      avgRatingString: '3.9',
      totalRatingsString: '50+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.1,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/anand-rasoi-nai-abaadi-mandsaur-620161',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '480475',
      name: 'Akshat Juice Sandwich Cofee',
      cloudinaryImageId: 'xy3yoczovrjzouyaoiis',
      areaName: 'Nai Abaadi',
      costForTwo: '₹149 for two',
      cuisines: ['Beverages', 'Ice Cream'],
      avgRating: 4.7,
      veg: true,
      parentId: '288645',
      avgRatingString: '4.7',
      totalRatingsString: '8',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.8,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹200',
        discountTag: 'SAVE BIG',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/akshat-juice-sandwich-cofee-nai-abaadi-mandsaur-480475',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '547536',
      name: 'Ujjain Famous Kulfi',
      cloudinaryImageId: 'vye7hnhhaghgpldthppt',
      areaName: 'Nai Abaadi',
      costForTwo: '₹300 for two',
      cuisines: ['Sweets', 'Beverages'],
      avgRating: 3.8,
      veg: true,
      parentId: '455471',
      avgRatingString: '3.8',
      totalRatingsString: '4',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.8,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/ujjain-famous-kulfi-nai-abaadi-mandsaur-547536',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '199868',
      name: 'Shankar Sweets (Station Road)',
      cloudinaryImageId: 'qj4o63zjravsdx7kno1n',
      locality: 'Mandsaur',
      areaName: 'Nai Abaadi',
      costForTwo: '₹300 for two',
      cuisines: ['Desserts'],
      veg: true,
      parentId: '181782',
      avgRatingString: '--',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.8,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 21:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/shankar-sweets-station-road-nai-abaadi-mandsaur-199868',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '290095',
      name: 'Second Home Kitchen And Restaurant',
      cloudinaryImageId: 'avlisyvsasfznfyygcpk',
      locality: 'Nai Abaadi',
      areaName: 'Bhatrewas',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Thalis', 'Biryani', 'Chinese', 'Pizzas'],
      avgRating: 3.8,
      veg: true,
      parentId: '179731',
      avgRatingString: '3.8',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/second-home-kitchen-and-restaurant-nai-abaadi-bhatrewas-mandsaur-290095',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '717585',
      name: 'Yummy Bites & Thick Shakes',
      cloudinaryImageId: 'e42b6dc8b65a7caff2a0d81cc34697e9',
      locality: 'Kothari Colony',
      areaName: 'Nai Abaadi',
      costForTwo: '₹199 for two',
      cuisines: ['Beverages', 'Burgers', 'Snacks'],
      avgRating: 4.9,
      veg: true,
      parentId: '427961',
      avgRatingString: '4.9',
      totalRatingsString: '10+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.4,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-02-22 23:20:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/yummy-bites-and-thick-shakes-kothari-colony-nai-abaadi-mandsaur-717585',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
];

const RestaurentContainer = () => {
  return (
    <div className="res-container">
      {resList.map((res) => (
        <RestaurentCard key={res.info.id} resData={res} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input />
      </div>
      <RestaurentContainer />
    </div>
  );
};

/**
 *
 * Component composition is when we use component inside component
 */
const Main = () => {
  return (
    <div className="main-app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
