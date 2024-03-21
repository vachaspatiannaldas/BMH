-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 02:12 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingagencies`
--

-- --------------------------------------------------------

--
-- Table structure for table `availabilities`
--

CREATE TABLE `availabilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hotel_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `availabilities`
--

INSERT INTO `availabilities` (`id`, `hotel_id`, `room_id`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(1, '3', '16', '2023-11-20', '2023-11-30', '2023-11-02 06:10:07', '2023-11-02 06:10:07'),
(7, '4', '19', '2023-11-20', '2023-11-30', '2023-11-07 16:47:42', '2023-11-07 16:48:35'),
(8, '11', '20', '2023-11-09', '2023-11-15', '2023-11-08 06:12:20', '2023-11-08 06:12:20');

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bill_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bill_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pay_mode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_sector_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `availability_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `user_id`, `hotel_id`, `hotel_sector_id`, `room_id`, `availability_id`, `check_in`, `check_out`, `price`, `status`, `created_at`, `updated_at`) VALUES
(20, '10', '3', '5', '[{\"id\":16,\"name\":\"Deluxe Rooms City View\",\"price\":\"15000\",\"qty\":2},{\"id\":18,\"name\":\"Deluxe Rooms Pool View\",\"price\":\"25000\",\"qty\":3}]', NULL, '2023-11-25', '2023-11-27', '210000', 'Pending', '2023-11-24 09:51:00', '2023-11-24 09:51:00'),
(21, '10', '3', '5', '[{\"id\":16,\"name\":\"Deluxe Rooms City View\",\"price\":\"15000\",\"qty\":2}]', NULL, '2023-12-17', '2023-12-18', '30000', 'Pending', '2023-12-16 01:39:35', '2023-12-16 01:39:35');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, '1 Star', 'active', '2023-11-02 10:43:35', '2023-11-02 10:43:35'),
(2, '2 Star', 'active', '2023-11-02 10:44:00', '2023-11-02 10:44:00'),
(3, '3 Star', 'active', '2023-11-02 10:45:05', '2023-11-02 10:45:05'),
(4, '4 Star', 'active', '2023-11-02 12:04:29', '2023-11-02 12:04:29'),
(5, '5 Star', 'active', '2023-11-06 12:48:13', '2023-11-06 12:48:13'),
(6, '6 Star', 'active', '2023-11-06 12:48:30', '2023-11-06 12:48:30'),
(7, '7 Star', 'active', '2023-11-06 12:48:49', '2023-11-06 12:48:49');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `festival_tbls`
--

CREATE TABLE `festival_tbls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hotel_id` bigint(20) NOT NULL,
  `room_id` bigint(20) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `festival_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `margin_percentage` double(8,2) NOT NULL,
  `total_price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `festival_tbls`
--

INSERT INTO `festival_tbls` (`id`, `hotel_id`, `room_id`, `start_date`, `end_date`, `festival_name`, `price`, `margin_percentage`, `total_price`, `created_at`, `updated_at`) VALUES
(3, 11, 20, '2023-11-15', '2023-11-30', 'diwali', 9000.00, 10.00, 9900.00, '2023-11-13 03:15:21', '2023-11-13 03:15:21'),
(4, 4, 19, '2023-11-15', '2023-11-20', 'diwali', 2970.00, 5.00, 3118.50, '2023-11-13 04:34:26', '2023-11-13 04:34:26'),
(5, 11, 20, '2023-11-18', '2023-11-30', 'diwali', 9000.00, 10.00, 9900.00, '2023-11-16 01:29:53', '2023-11-16 01:29:53');

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(2500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(2500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pincode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_sector_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendor_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `description`, `images`, `country`, `state`, `city`, `pincode`, `location`, `hotel_sector_id`, `vendor_id`, `created_at`, `updated_at`) VALUES
(3, 'Balaji Sarovar Premiere', 'Balaji Sarovar Premiere is a five-star business hotel in Solapur. Situated at Hotgi Road, near the airport and in close proximity to the railway station, the luxurious hotel offers guests a splendid and personalized experience.  Rooms categorised into Deluxe Rooms City View and Deluxe Rooms Pool View, are splendidly furnished and facilitated with contemporary amenities. We have a fine-dining restaurant serving multi-cuisine delights, and a speciality restaurant serving oriental delicacies. High Point, the in-house bar, is one of the best bars in Solapur. The hotel has a beautiful garden, a plunge pool, and a well-designed poolside with sunbeds. The banquet halls at our hotel can accommodate up to 800 guests and are ideal for weddings and other grand occasions. We have four well-equipped conference halls as well. Guests can unwind at our spa with rejuvenating massages and various other spa treatments. Our travel desk would help you plan your tours around the city.', '[\"143601132262913.jpg\",\"143601134109556.jpg\",\"143601134109559.jpg\",\"143601134109562.jpg\",\"143601134109566.jpg\",\"143601134109577.jpg\",\"143601134109581.jpg\",\"143601134109602 (1).jpg\",\"143601134109602.jpg\"]', 'India', 'Maharashtra', 'Solapur', '413002', 'Aasara Chowk, Hotgi Rd, Model Colony, Majrewadi', '5', '4', '2023-11-03 09:06:01', '2023-11-03 09:06:01'),
(4, 'Hotel Surya Executive', 'Hotel Surya, Solapur witnesses this growth & warmth of the tourist for the past years due to its hospitality quite & sceneric atmosphere though not far away from the business center of the city. Therefore Hotel Surya is the first & foremost choice of the business class as well as of the on coming. Tourists we have got well furnished with all modern amenities guest rooms.', '[\"143815494659771.jpg\",\"143815494659802.jpg\",\"143815494659805.jpg\",\"143815494659810.jpg\",\"143815496524564.jpg\",\"143815496524569.jpg\",\"143815496524570.jpg\"]', 'India', 'Maharashtra', 'Solapur', '413002', 'OLd Police Line, Murarji Peth', '5', '4', '2023-11-03 09:08:15', '2023-11-03 09:08:15'),
(5, 'The Cult Stay', 'The Cult Stay features a shared lounge, terrace and free WiFi. There\'s a restaurant serving Indian cuisine, and free private parking is available.  The units are equipped with air conditioning, a flat-screen TV with cable channels, a minibar, a electric tea pot, a shower, free toiletries and a closet. All rooms come with a private bathroom, while selected rooms here will provide you with a kitchen with a microwave. All guest rooms at the inn come with a seating area.', '[\"144101271688174.jpg\",\"144101271688177 (1).jpg\",\"144101271688177.jpg\",\"144101274133808.jpg\",\"144101274140664.jpg\",\"144101274140830.jpg\",\"144101276343708.jpg\",\"144101305007133.jpg\"]', 'India', 'Maharashtra', 'Solapur', '413002', 'Pavan Ganpati Road, near Furde Complex, Laxmi Peth, Damani Nagar', '5', '4', '2023-11-03 09:11:01', '2023-11-03 09:11:01'),
(6, 'Shantai Hotel', 'Welcome to Shantai Hotel - an unequalled Business Hotel in one of Pune\'s most appreciated neighborhood, Camp. We take pride in acknowledging ourselves as a business hotel that\'s decidedly different.  Located in the heart of the city, enveloped by most civic and social amenities, Shantai Hotel has always been a preferred choice for corporate meets and gatherings. And to complement this preferred choice, Shantai Hotel is decked with state-of-the-art facilities and amenities, a contemporary decor, comfortable accommodation, kosher dining, and above all - warm hospitality that\'s second to none! Shantai Hotel is an initiative of Mhaske Hotels Pvt. Ltd., Pune.', '[\"15360610688980.jpg\",\"15360633677214.jpg\",\"15360633677217.jpg\",\"15360633677218.jpg\",\"15360633677225.jpg\",\"15360633677228.jpg\",\"15360633677232.jpg\",\"15360633677234.jpg\",\"15360633677240.jpg\",\"15360633780226.jpg\",\"15360633780241.jpg\",\"15360633780244.jpg\",\"153606168370859.jpg\"]', 'India', 'Maharashtra', 'Pune', '411011', 'Mhaske Hotels Pvt. Ltd. Shantai Hotel Off Moledina Road Camp 10/3,Rasta Peth', '5', '4', '2023-11-03 10:06:06', '2023-11-03 10:06:06'),
(7, 'Radisson Blu', 'Style, form, beauty and function. That’s what you’ll find at Radisson Blu. Lobby and public space areas make the initial impression on Radisson Blu guests and are about much more than check-in and check-out. We have enhanced all Radisson Blu common areas to further uplift the overall guest experience. Every social space, meetings and events area, food and beverage venue and wellness space has been given the same level of attention that you’ll experience during your stay at any Radisson Blu hotel. From the stunning Wine Tower in Stansted to the Dom Lounge at the Radisson Blu Hotel, Berlin, our focus is all about enhancing the unique traveler-experience through elegant, sophisticated structures and spaces for business and leisure.', '[\"15410033972047.jpg\",\"15410033972051.jpg\",\"15410033972069.jpg\",\"15410033972122.jpg\",\"15410033972176.jpg\",\"15410033972233.jpg\",\"15410033972254.jpg\",\"15410033975022.jpg\",\"154100132709896.jpg\",\"154100132710705.jpg\",\"154100132710970.jpg\",\"154100132711141.jpg\",\"154100219645458.jpg\",\"154100219645529.jpg\",\"154100501420332.jpg\"]', 'India', 'Maharashtra', 'Nagpur', '440014', '7 Wardha Road', '5', '4', '2023-11-03 10:11:00', '2023-11-03 10:11:00'),
(8, 'Hotel Kohinoor Continental', 'Truly a cut above the rest, Hotel Kohinoor Continental is one of the leading 4 star hotels in Andheri East. Our warm hospitality and signature services are further complemented by a wide range of top-notch facilities. Perfect for corporate as well as leisure travelers, our contemporary decor, cozy rooms, spacious lobby and a pertinent tariff structure is enough to ensure one of the best experiences of your life.', '[\"15441111063416.jpg\",\"15441121235862.jpg\",\"15441121235863.jpg\",\"15441121236226.jpg\",\"15441137660350.jpg\",\"154411363400901.jpg\",\"154411363401037.jpg\",\"154411363401233.jpg\",\"154411476589095.jpg\",\"154411476599358.jpg\"]', 'India', 'Maharashtra', 'Mumbai', '400059', 'Andheri Kurla Road, Andheri (E)', '5', '4', '2023-11-03 10:14:11', '2023-11-03 10:14:11'),
(9, 'Hotel Bawa Continental', 'Juhu, one of the most upscale neighbourhoods in Mumbai, is renowned for being the home of many Bollywood celebrities. It is also known for the beautiful Juhu Beach on the shores of the Arabian Sea. Our 3-star hotel near Juhu Beach - Hotel Bawa Continental, is located strategically in the city. It is one of the best hotels near the Mumbai airport, offering a restful stay for all leisure, business, group, solo and transit travellers. We offer aesthetically-designed accommodations, overlooking the beautiful city and a marvellous multi-cuisine diner serving up a variety of delicious delicacies.  We are stationed at a comfortable distance from many travel hubs and popular tourist attractions in Juhu. The famous Juhu Beach is at a short distance of 900 m from our hotel. Prominent travel hubs such as Chhatrapati Shivaji Maharaj International Airport and Chhatrapati Shivaji Maharaj Terminus are in close proximity as well.', '[\"15460818341459.jpg\",\"15460818341507.jpg\",\"154608187709556.jpg\",\"154608187709656.jpg\",\"154608187709976.jpg\",\"154608188648789.jpg\",\"154608188708587.jpg\",\"154608188708596.jpg\",\"154608189285663.jpg\",\"154608189285967.jpg\"]', 'India', 'Maharashtra', 'Mumbai', '400048', 'Ground Floor, Juhu Tara Road, Opposite Theosophical Society, Airport Area, Juhu', '5', '4', '2023-11-03 10:16:08', '2023-11-03 10:16:08'),
(10, 'The Sonnet Hotel', 'On entering this hotel, you will immediately sense its special intimate atmosphere that makes you feel like being in your own home. The hotel lobby is classy. It has all the corporate taste for opulent items with a touch of personality - those little out of sync items that makes decor \"human\", which is deliberate. It could be that in this chaotic world we are attracted to spaces devoid of such things. The floor shines as well as any polished glass. There are flowers, beautiful, the perfect shade of orange to compliment the hues and creams. Each detail has been passionately chosen and each room deserves a visit. The hotel style mixes valuable original artworks with an unexpected eclectic contemporary twist. The special charm, eclectic choice of cuisine and the cozy mood of The Sonnet Kolkata, will make you feel as a true Kolkatan in The City of Joy. It has been the preferred choice for corporates and top business honchos have chosen this hotel as their favourite destination for most of their business meets.', '[\"15484616964420.jpg\",\"15484618318351.jpg\",\"15484618318560.jpg\",\"15484618318594.jpg\",\"15484618318614.jpg\",\"15484618318670.jpg\",\"15484628842358.jpg\",\"15484628842408.jpg\",\"15484628842646.jpg\",\"15484628842810.jpg\",\"15484628843121.jpg\",\"15484628843127.jpg\",\"15484628843191.jpg\",\"15484628843707.jpg\",\"15484628845918.jpg\",\"154846459766093.jpg\",\"154846459766099.jpg\"]', 'India', 'West Bengal', 'Kolkata', '700064', 'Block DD, Plot No. 8, Sector 1', '5', '4', '2023-11-03 10:18:46', '2023-11-03 10:18:46'),
(11, 'JW Marriott Hotel', 'Experience the resplendent JW Marriott Hotel Kolkata, a 5-star accommodation with understated elegance and sophistication. Located 16 kilometers from Netaji Subhash Chandra Bose Airport, our Kolkata lodging is midway between the airport and the city\'s old business district. Well-appointed rooms and suites are spacious and offer premium amenities. Four distinctive dining options include an inspired Asian restaurant and a discotheque offering vibrant nightlife. The holistic Spa by JW offers a host of therapies to help you relax. Renowned JW personalized service coupled with one of the largest ballrooms in the city make our Kolkata hotel an ideal destination for weddings, corporate and social events. Expansive indoor and intimate outdoor event space includes a distinctive boardroom with modern facilities, five lavish studios and an elegant bridal room that offers the perfect place to don bridal finery. Intuitive service and luxurious surroundings ensure a memorable stay at JW Marriott Hotel Kolkata in India.', '[\"155209459766077.jpg\",\"155209459766082.jpg\",\"155209459766085.jpg\",\"155209459766087.jpg\",\"155209459766094.jpg\",\"155209459766099.jpg\",\"155209459766101.jpg\",\"155209461710982.jpg\"]', 'India', 'West Bengal', 'Kolkata', '700105', '4A, J.B.S. HALDANE AVENUE', '3', '4', '2023-11-03 10:22:10', '2023-11-03 10:22:10'),
(12, 'Duck n Chill', 'Resort with different huts on the beach. All rooms in our hotel have double bed, mosquito net, fan, attached bathroom, veranda. The 4 front huts have hot water and amazing view. Bikes and scooter for rent, and a restaurant with national and international food with a breaktaking view over the beach. Free WiFi. And the AC rooms, of course has AC and hot water too', '[\"15562023.jpg\",\"15562071.webp\",\"15562072.webp\",\"15562075.webp\",\"15562077.webp\",\"15562079.webp\",\"15562091.webp\",\"15562095.webp\"]', 'India', 'Goa', 'Agonda', '403702', 'Agonda Beach Road', '4', '4', '2023-11-03 10:26:20', '2023-11-03 10:26:20'),
(13, 'Hotel Dakha International', 'Hotel Dakha International has state of the art ultra modern facilities, amenities & services that match up to the \"stringent neatness & quality standards at irresistible tariff to delight every possible need & want of the guests.\" Located in the Heart of the City, at Hotel Dakha International we take care of your needs with the hospitality that is worth Mentioning. we have tried to provide our guests with all the facilities at the most reasonable prices that is why we can call ourselves a budget hotel so that you can get the Worth of your money.', '[\"155908160512672.jpg\",\"155908160512680.jpg\",\"155908160512692.jpg\",\"155908160512719.jpg\",\"155908160512739.jpg\",\"155908160512741.jpg\",\"155908160512747.jpg\",\"155908160512753.jpg\",\"155908160512755.jpg\",\"155908160512771.jpg\",\"155908160574862.jpg\",\"155908330417727.jpg\",\"155908330417773.jpg\",\"155908330417858.jpg\",\"155908330418039.jpg\"]', 'India', 'Delhi', 'New Delhi', '110005', '974/1, Dakha Plaza, Arya Samaj Rd, near Hanuman Statue, Karol Bagh', '5', '4', '2023-11-03 10:29:08', '2023-11-03 10:29:08'),
(16, 'ibis Bengaluru City Centre', 'Located 600 metres from UB City, ibis Bengaluru City Centre welcomes you in the heart of the commercial and business area. Ibis Bengaluru City Centre hotel is just 2-minute walk from the Cubbon Park & Kanteerva Stadium. UB city, Mallya Hospital and Chinnaswamy Cricket Stadium are just walking distance. Public transport is also easily accessible, with buses and taxis right on the doorstep, the Metro station a short walk away.  Located in close proximity to the famous UB City (600m), Richmond road, Lavelle road and Residency road, you will reach your office within minutes. Guests can make use of the web corner, gymnasium, business center, laundry services, and currency exchange. If business calls, then ibis Bengaluru City Centre is where you must stay. Located in close proximity to the famous UB City (600m), Richmond road, Lavelle road and Residency road, you will reach your office within minutes.', '[\"16052034644942.jpg\",\"16052035985216.jpg\",\"16052035985315.jpg\",\"16052035985378.jpg\",\"16052048356148.jpg\",\"160520170839114.jpg\",\"160520252005378.jpg\",\"160520252005385.jpg\",\"160520252005387.jpg\"]', 'India', 'Karnataka', 'Bengaluru', '560027', 'Plot No - 30, Rajaram Mohan Roy Road, Off Richmond Road', '5', '4', '2023-11-03 10:35:20', '2023-11-03 10:35:20'),
(18, 'FabHotel Prime Grand Unity', 'Located conveniently in the Sarkhej district of Ahmedabad, FabHotel Prime Grand Unity is located 5.4 miles from IIM, 10 miles from Gandhi Ashram and 13 miles from Sardar Patel Stadium. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk. Free private parking is available and the hotel also has car rental for guests who want to explore the surrounding area.  At the hotel, all rooms have a closet. Complete with a private bathroom equipped with a shower and free toiletries, all rooms at FabHotel Prime Grand Unity have a flat-screen TV and air conditioning, and certain rooms also offer a seating area. At the accommodation the rooms are equipped with bed linen and towels.  Guests at FabHotel Prime Grand Unity can enjoy a Full English/Irish or a vegetarian breakfast.', '[\"161003485898456.jpg\",\"161003485898469.jpg\",\"161003485898471.jpg\",\"161003485898475.jpg\",\"161003485898476.jpg\",\"161003485898477.jpg\",\"161003485898483.jpg\",\"161003485898854.jpg\",\"161003485898855.jpg\",\"161003485898994.jpg\",\"161003485899009.jpg\",\"161003485899011.jpg\"]', 'India', 'Ahmedabad', 'Sarkhej', '382213', 'Shivam Square, Near Chehar Mata Mandir, Opp. Laxminarayan Petrol Pump, Sarkhej-Bavla Road', '5', '4', '2023-11-03 10:40:03', '2023-11-03 10:40:03'),
(19, 'The Plaza', 'Experience New York\'s Iconic Luxury Hotel on Central Park South\r\nSince its debut on October 1, 1907, The Plaza Hotel has remained a New York icon hosting world leaders, dignitaries, captains of industry, Broadway legends, and Hollywood royalty. As an established staple for lavish society affairs and blockbuster films, The Plaza has welcomed guests from around the world to enjoy its magic at the castle on Central Park South for more than 100 years. Ideally situated on Fifth Avenue, The Plaza’s prestigious address continues to define elegance with unmatched service and an ever-evolving modern sensibility.', '[\"174559ami1.jpg\",\"174559ami2.jpg\",\"174559bath1.jpg\",\"174559bath2.jpg\",\"174559bath3.jpg\",\"174559bed1.jpg\",\"174559bed2.jpg\",\"174559bed3.jpg\",\"174559ext1.jpg\",\"174559ext2.jpg\",\"174559ext3.jpg\",\"174559int1.jpg\",\"174559int2.jpg\",\"174559int3.jpg\"]', 'USA', 'New York', 'New York', '10019', '768 Fifth Avenue', '5', '4', '2023-11-04 12:15:59', '2023-11-04 12:15:59'),
(20, 'The Hotel Windsor', 'The Windsor is Australia’s most loved and renowned grand hotel, pre-dating The Savoy in London, The Plaza and The Waldorf Astoria in New York, The Ritz in Paris, and Raffles Hotel in Singapore. Established in 1883, it combines the classic beauty and architecture of the Victorian age with the graciousness of that bygone era.\r\n\r\nThis year, the heritage-protected hotel celebrates 140 years of service. Renowned as the home of Afternoon Tea, it has expanded into a collection of hospitality establishments including award-winning restaurants Aru and Sunda (see dining) and gluten-free bakery, Kudo.', '[\"175601ami1.JPG\",\"175601bath1.jpg\",\"175601bath2.jpg\",\"175601bath3.jpg\",\"175601bed1.jpg\",\"175601bed2.jpg\",\"175601bed3.jpg\",\"175601bed4.jpg\",\"175601ex1.jpg\",\"175601ex2.jpg\",\"175601ex3.jpg\",\"175601int1.JPG\",\"175601int2.jpg\",\"175601int3.jpg\"]', 'Australia', 'Melbourne', 'Melbourne', '3000', '111 Spring St, Melbourne VIC', '5', '4', '2023-11-04 12:26:01', '2023-11-04 12:26:01');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_admins`
--

CREATE TABLE `hotel_admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendor_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hotel_admins`
--

INSERT INTO `hotel_admins` (`id`, `name`, `hotel_id`, `vendor_id`, `contact`, `email`, `password`, `created_at`, `updated_at`) VALUES
(4, 'krishna', '4', '4', '7020270105', 'krishna@gmail.com', '$2y$10$AGoNANWnV1GTX2jZ7AH/ruF8IUfLxD6D8KB4oHSalMvZM99o0MNN.', '2023-11-07 10:41:15', '2023-11-07 10:41:15');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_sectors`
--

CREATE TABLE `hotel_sectors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hotel_sectors`
--

INSERT INTO `hotel_sectors` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Motel', 'active', '2023-11-03 01:32:33', '2023-11-03 01:32:33'),
(4, 'Resort', 'active', '2023-11-03 01:34:16', '2023-11-03 01:34:16'),
(5, 'Hotel', 'active', '2023-11-03 01:34:36', '2023-11-03 01:34:36'),
(6, 'Inns', 'active', '2023-11-03 01:35:20', '2023-11-03 01:35:20');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_10_30_073807_create_registers_table', 1),
(6, '2023_10_30_075513_create_hotels_table', 1),
(7, '2023_10_31_062422_create_availabilities_table', 1),
(8, '2023_10_31_080752_create_categories_table', 1),
(9, '2023_10_31_093602_create_vendors_table', 1),
(10, '2023_10_31_103451_create_bookings_table', 1),
(11, '2023_10_31_121719_create_bills_table', 1),
(12, '2023_11_02_100151_create_user_roles_table', 1),
(13, '2023_11_02_100341_create_hotel_admins_table', 1),
(14, '2023_11_02_100630_create_hotel_sectors_table', 1),
(15, '2023_11_02_100914_create_rooms_table', 1),
(16, '2023_11_08_101447_create_contacts_table', 2),
(17, '2023_11_10_084507_create_festival_tbls_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'MyApp', '92fc27186cf925743ee2b2deff9bb875ea68cccb2ece44a7d128462cc54c319c', '[\"*\"]', NULL, NULL, '2023-11-02 05:54:54', '2023-11-02 05:54:54'),
(2, 'App\\Models\\User', 3, 'MyApp', '891768fddeef35b2588bec9382e8cd14dbaac71b86df9dc9b525fdb0ac805514', '[\"*\"]', NULL, NULL, '2023-11-02 05:56:20', '2023-11-02 05:56:20'),
(3, 'App\\Models\\User', 4, 'MyApp', '34e7afe18afe800a8a18d85ed6b0a149380797009fba3419525499aa86227038', '[\"*\"]', '2023-11-02 07:40:50', NULL, '2023-11-02 07:08:52', '2023-11-02 07:40:50'),
(4, 'App\\Models\\User', 1, 'MyApp', '412b636d59fc7b105c3c436352335200c2dfa593988af31c8e29c658e24d393b', '[\"*\"]', NULL, NULL, '2023-11-02 08:39:01', '2023-11-02 08:39:01'),
(5, 'App\\Models\\User', 1, 'MyApp', '7b0725ddd6df577e3c2b6b003b4d986f022654d27a903e05bd4ba1143c5b4521', '[\"*\"]', NULL, NULL, '2023-11-02 08:40:17', '2023-11-02 08:40:17'),
(6, 'App\\Models\\User', 1, 'MyApp', 'd4995e82fc034ad86e021473b144264759cf6e4ffbbc8d465485d5cdfe73a654', '[\"*\"]', NULL, NULL, '2023-11-02 08:40:40', '2023-11-02 08:40:40'),
(7, 'App\\Models\\User', 1, 'MyApp', 'a838462489a4edc5bc2c22a4fc819f8e2e6fcd663959a4fef99e2afca5d38156', '[\"*\"]', NULL, NULL, '2023-11-02 08:40:52', '2023-11-02 08:40:52'),
(8, 'App\\Models\\User', 1, 'MyApp', '1f2aeae768fe2ed03f27097b97730babf2878ab2cb4b4c3bb2da77bfd9f443f0', '[\"*\"]', NULL, NULL, '2023-11-02 08:41:21', '2023-11-02 08:41:21'),
(9, 'App\\Models\\User', 9, 'MyApp', '919e3ec1bb670ef38c015e736836a7440d7cbc2b1fb8f0c5b9265ccbe9fbae97', '[\"*\"]', NULL, NULL, '2023-11-05 02:32:17', '2023-11-05 02:32:17'),
(10, 'App\\Models\\User', 10, 'MyApp', '9f539471f4d95e67b0a6076a82fd50759255f70c8bd4f13ba57e7bf9dfbee432', '[\"*\"]', NULL, NULL, '2023-11-05 02:33:22', '2023-11-05 02:33:22'),
(11, 'App\\Models\\User', 10, 'authToken', 'd62163eabd04d0d94a547eb9c0e52538619af1a847aaf586f027cfe7803d3889', '[\"*\"]', NULL, NULL, '2023-11-05 03:11:56', '2023-11-05 03:11:56'),
(12, 'App\\Models\\User', 10, 'authToken', 'c2d58ef00c1856ac5387f8288a428a83908a726ba3f806ec28e999878dafd417', '[\"*\"]', NULL, NULL, '2023-11-05 03:18:22', '2023-11-05 03:18:22'),
(13, 'App\\Models\\User', 10, 'authToken', '94b1c79c63e01c11e15ce67c2778bb33e170c21ee48892940efa1ce1c16c0d61', '[\"*\"]', NULL, NULL, '2023-11-05 03:23:14', '2023-11-05 03:23:14'),
(14, 'App\\Models\\User', 10, 'authToken', 'd635c850e6c604eba97abc3c58e32cdd48e51edfa34e4caa7751ce37b21bfd54', '[\"*\"]', NULL, NULL, '2023-11-05 03:30:10', '2023-11-05 03:30:10'),
(15, 'App\\Models\\User', 10, 'authToken', 'f3e02a9613f8a049e0a6e40b7d0dfa37682258e1810929d13c58ee09b499b544', '[\"*\"]', NULL, NULL, '2023-11-05 04:06:04', '2023-11-05 04:06:04'),
(16, 'App\\Models\\User', 10, 'authToken', 'b5634e3ab003a8fee75c5b998ad33af6f9c6366a3ccbaef8fbda78610815ea71', '[\"*\"]', NULL, NULL, '2023-11-05 04:16:28', '2023-11-05 04:16:28'),
(17, 'App\\Models\\User', 10, 'authToken', '086d582dcf1a6104e17195520eb6a5123caa90dfe7c6e60a1ff6c9eb2a96ee64', '[\"*\"]', NULL, NULL, '2023-11-05 04:20:21', '2023-11-05 04:20:21'),
(18, 'App\\Models\\User', 11, 'MyApp', '738d5a61166567d748ca2e9e2f5a3cff2eb7e240bc25f760821c713fc48dc592', '[\"*\"]', NULL, NULL, '2023-11-05 06:50:42', '2023-11-05 06:50:42'),
(19, 'App\\Models\\User', 11, 'authToken', 'e876bcd3e1dc1ece005c4f43dc887879ec80b1f2c01dd244f7c13b69d1432983', '[\"*\"]', NULL, NULL, '2023-11-05 06:51:23', '2023-11-05 06:51:23'),
(20, 'App\\Models\\User', 11, 'authToken', '95839c2260e7d04568d0b2d4a0fde44b9308b063e57e87da4d6e9aa4c0141aa9', '[\"*\"]', NULL, NULL, '2023-11-05 06:51:28', '2023-11-05 06:51:28'),
(21, 'App\\Models\\User', 11, 'authToken', '2d0674eca4422ba7d7253c25af00541e5d95c746fc144808a44e4105aeacbeea', '[\"*\"]', NULL, NULL, '2023-11-05 06:54:29', '2023-11-05 06:54:29'),
(22, 'App\\Models\\User', 11, 'authToken', '9f7dceba10859c6f53663dd739f507e4f984159d4a1c32585f80ac63c2fad1e2', '[\"*\"]', NULL, NULL, '2023-11-05 06:55:16', '2023-11-05 06:55:16'),
(23, 'App\\Models\\User', 1, 'authToken', '4eeeef53ef919cfe0d865db630e08c5acef43219c9ecbff0a2ca490ccd67fbc9', '[\"*\"]', NULL, NULL, '2023-11-05 06:56:39', '2023-11-05 06:56:39'),
(24, 'App\\Models\\User', 1, 'authToken', '131b6f4bf1879f46f139751b9a6f716082e05ddad33c917abc57fdbaa049db51', '[\"*\"]', '2023-11-05 07:12:37', NULL, '2023-11-05 07:01:40', '2023-11-05 07:12:37'),
(25, 'App\\Models\\User', 1, 'authToken', 'e10484c563c1780a37ffe82cadeb264b74cc0a621f7b88c0ea817f15a64ff7d1', '[\"*\"]', '2023-11-05 07:37:48', NULL, '2023-11-05 07:16:53', '2023-11-05 07:37:48'),
(26, 'App\\Models\\User', 10, 'authToken', 'caea8257dc043f68574bbfe399c3783366fd1911504460865141eeb49e9e2d81', '[\"*\"]', NULL, NULL, '2023-11-05 07:58:33', '2023-11-05 07:58:33'),
(27, 'App\\Models\\User', 13, 'MyApp', 'bc0ded58ffdc1ddb9c1d042b6713704864977a3fd90eb6277397197c7dca5021', '[\"*\"]', NULL, NULL, '2023-11-05 08:12:00', '2023-11-05 08:12:00'),
(28, 'App\\Models\\User', 13, 'authToken', '8770105566dd96d91d19378bddb104a3cfefced1fd0a2e6a6f2f3315d5fc4927', '[\"*\"]', NULL, NULL, '2023-11-05 08:12:48', '2023-11-05 08:12:48'),
(29, 'App\\Models\\User', 1, 'authToken', '550ed04e463aa6c66e0c2caf0103eb6511f3b36fde6cfb6656ae0e32e13fbb07', '[\"*\"]', '2023-11-06 04:43:43', NULL, '2023-11-06 00:03:22', '2023-11-06 04:43:43'),
(30, 'App\\Models\\User', 1, 'authToken', 'cb4420f6da863ba28bae2e00af5295729cec47dbdbbc582ad2421496b960dbf6', '[\"*\"]', '2023-11-06 06:36:14', NULL, '2023-11-06 06:23:07', '2023-11-06 06:36:14'),
(31, 'App\\Models\\User', 1, 'authToken', '6c7ed306ef19fee1e1a4cf917eb91ff161730a4d352c3ab6bda12c764bf38216', '[\"*\"]', '2023-11-06 06:39:29', NULL, '2023-11-06 06:37:00', '2023-11-06 06:39:29'),
(32, 'App\\Models\\User', 1, 'authToken', '5799d45ba79feab4b2ff7d773aa09d8d6b76c82995bb5bf0c980644105fa4e12', '[\"*\"]', '2023-11-06 07:38:09', NULL, '2023-11-06 06:39:50', '2023-11-06 07:38:09'),
(33, 'App\\Models\\User', 1, 'authToken', '65b64d33de1feb259ed5af0eedfdca7d9659019c2fb4bf180a792a87d23f9fca', '[\"*\"]', '2023-11-06 08:23:58', NULL, '2023-11-06 08:23:45', '2023-11-06 08:23:58'),
(34, 'App\\Models\\User', 10, 'authToken', '2ee904ed5a0778b0ed7898afccab7da716ca5f6984d3768e4d0621068a574d6e', '[\"*\"]', NULL, NULL, '2023-11-06 11:53:41', '2023-11-06 11:53:41'),
(35, 'App\\Models\\User', 10, 'authToken', '089d9cb0ac4ab98e0ac1f124dc49cc5b4533d9e6f1b4493791c94a0ea895d6bd', '[\"*\"]', NULL, NULL, '2023-11-06 11:58:24', '2023-11-06 11:58:24'),
(36, 'App\\Models\\User', 10, 'authToken', 'c1f5d7b4fc8a096cdffec08f416b94b76d035ea699faba23c94c4c4b42a32d33', '[\"*\"]', NULL, NULL, '2023-11-06 12:02:22', '2023-11-06 12:02:22'),
(37, 'App\\Models\\User', 1, 'authToken', 'cf9212d010f9050299cefe1180e5ff6f186970184e8a8257a4558c15fbcd94c3', '[\"*\"]', '2023-11-06 12:49:28', NULL, '2023-11-06 12:47:46', '2023-11-06 12:49:28'),
(38, 'App\\Models\\User', 10, 'authToken', '9a5b39b185b70faeef0ea930afc28d82d881b14eb256d53fb0b47fe0144398bd', '[\"*\"]', NULL, NULL, '2023-11-06 23:50:32', '2023-11-06 23:50:32'),
(39, 'App\\Models\\User', 10, 'authToken', '2876e219036a28df2f2bd92b3ab5cfa858a835197d54a6ed10299c0529235eec', '[\"*\"]', NULL, NULL, '2023-11-07 08:22:36', '2023-11-07 08:22:36'),
(40, 'App\\Models\\User', 1, 'authToken', 'f020400496a9bfe8251ffc49f0dbb81fa054e27fa4009546dd823c072391afb4', '[\"*\"]', '2023-11-07 10:21:53', NULL, '2023-11-07 10:21:18', '2023-11-07 10:21:53'),
(41, 'App\\Models\\User', 1, 'authToken', 'e12c89acc5ef4763cabd74b8391a4b3f167fe173f1d4911a0b082f579404aa73', '[\"*\"]', NULL, NULL, '2023-11-07 10:23:22', '2023-11-07 10:23:22'),
(42, 'App\\Models\\User', 13, 'authToken', 'd1a989afd8a43477e78450d4ff7603e93e96fdcf9b97b3123474dfe65edb50e2', '[\"*\"]', '2023-11-07 10:32:37', NULL, '2023-11-07 10:28:19', '2023-11-07 10:32:37'),
(43, 'App\\Models\\User', 13, 'authToken', 'c68c01ce65db5ea585801c1f4cdc455bb2b469d9e3f4a947fe6054832d4a7d6c', '[\"*\"]', '2023-11-07 10:33:33', NULL, '2023-11-07 10:33:21', '2023-11-07 10:33:33'),
(44, 'App\\Models\\User', 1, 'authToken', 'f8ab023a72ea9711a80052de663443f388ddcc2533f0a2a4330f012b88397f04', '[\"*\"]', '2023-11-07 11:11:51', NULL, '2023-11-07 10:39:25', '2023-11-07 11:11:51'),
(45, 'App\\Models\\User', 14, 'authToken', '1977e25313f9af35cc61b7f98e702b9d592b327f6aff2e34c4fa74f7ed19e601', '[\"*\"]', '2023-11-07 11:15:51', NULL, '2023-11-07 11:12:30', '2023-11-07 11:15:51'),
(46, 'App\\Models\\User', 10, 'authToken', '31af8e4f5656ad39f113d2239d5ee5e4c73e94476ad85c52a33ff18c58199683', '[\"*\"]', NULL, NULL, '2023-11-07 11:19:56', '2023-11-07 11:19:56'),
(47, 'App\\Models\\User', 14, 'authToken', 'd16d1708452924ba62fb70ca6ab67caaac9ab71aa73ee5d0951df79c4baae353', '[\"*\"]', '2023-11-08 00:40:27', NULL, '2023-11-08 00:34:46', '2023-11-08 00:40:27'),
(48, 'App\\Models\\User', 14, 'authToken', '46a4af03d60fc137a979bedeeb0f1560784fb27508fb781a31c5a756d2e9417f', '[\"*\"]', '2023-11-08 02:56:17', NULL, '2023-11-08 02:53:19', '2023-11-08 02:56:17'),
(49, 'App\\Models\\User', 10, 'authToken', 'dd116da184429cc07e68bc715e480a417535be95ae664f3314f2cb8652a3a443', '[\"*\"]', NULL, NULL, '2023-11-08 05:18:50', '2023-11-08 05:18:50'),
(50, 'App\\Models\\User', 14, 'authToken', '39acd804711943e935ad633b9c87146618b1f09b6874383169d283bbf0ec326e', '[\"*\"]', NULL, NULL, '2023-11-08 05:31:47', '2023-11-08 05:31:47'),
(51, 'App\\Models\\User', 1, 'authToken', 'c0e9b832ab7c621bbcaa82d0dc67ad5b68af4477d0a0b00f54bfaf5ea0c13dcd', '[\"*\"]', '2023-11-08 06:03:08', NULL, '2023-11-08 05:32:36', '2023-11-08 06:03:08'),
(52, 'App\\Models\\User', 14, 'authToken', '9ae152dc4c2f08a97ceaaeb15ef765ad1e7f3965aa0ca19035e0caa0ab86c2bb', '[\"*\"]', '2023-11-08 06:03:48', NULL, '2023-11-08 06:03:25', '2023-11-08 06:03:48'),
(53, 'App\\Models\\User', 10, 'authToken', '8ee25e0e0d0a25551b9b0e154bdc3eaa496a8ddb99582a28c35302b442c0a413', '[\"*\"]', NULL, NULL, '2023-11-08 10:41:31', '2023-11-08 10:41:31'),
(54, 'App\\Models\\User', 10, 'authToken', '0c3466d23a4c08f23de9001dba3d7a8a7eb6b797f249cf25d83060f1a3bc15d9', '[\"*\"]', NULL, NULL, '2023-11-08 12:06:13', '2023-11-08 12:06:13'),
(55, 'App\\Models\\User', 14, 'authToken', '54483bf077bce615bed210fb856a2fcf006895310eb750e99e8f55081952bb8a', '[\"*\"]', '2023-11-08 12:28:05', NULL, '2023-11-08 12:27:05', '2023-11-08 12:28:05'),
(56, 'App\\Models\\User', 1, 'authToken', '2d114f6554a6f04a5b39a88459272418c694bdb7bc37f2da10bc1a7980efde51', '[\"*\"]', '2023-11-08 12:29:16', NULL, '2023-11-08 12:28:28', '2023-11-08 12:29:16'),
(57, 'App\\Models\\User', 10, 'authToken', 'a0e032fd6e9c475a391fddd89135fa0d3dda74ca239eeed9081e4d1330db1fd0', '[\"*\"]', NULL, NULL, '2023-11-09 05:18:32', '2023-11-09 05:18:32'),
(58, 'App\\Models\\User', 1, 'authToken', '18920f444292b755cdb4f02abe3ce3cec0c2fd2be2fc461853aa7926ac3ed75d', '[\"*\"]', '2023-11-09 05:50:20', NULL, '2023-11-09 05:40:18', '2023-11-09 05:50:20'),
(59, 'App\\Models\\User', 1, 'authToken', 'fb23f58c4342858933898de8467df8753c280485998c94c5c8f1bd3820fc4af4', '[\"*\"]', NULL, NULL, '2023-11-09 06:31:11', '2023-11-09 06:31:11'),
(60, 'App\\Models\\User', 1, 'authToken', '7ca32db13c0f200f74c74a3e2ffc96f408aa86faef728712b737088fb4cefda9', '[\"*\"]', NULL, NULL, '2023-11-09 06:57:33', '2023-11-09 06:57:33'),
(61, 'App\\Models\\User', 17, 'MyApp', '3a0ed1007e4f7e675c391ad5519babae7cd8483216ca4a8b6990a84b2af43cad', '[\"*\"]', NULL, NULL, '2023-11-09 08:00:11', '2023-11-09 08:00:11'),
(62, 'App\\Models\\User', 1, 'authToken', '8d5aace10460235f8133e5ce86363b8c7d2b13fff345a3248870bc72aeb46deb', '[\"*\"]', '2023-11-10 06:58:02', NULL, '2023-11-10 02:57:40', '2023-11-10 06:58:02'),
(63, 'App\\Models\\User', 1, 'authToken', '4f0a6d6303acbab39c24298c7f62404aadefda197133dcbe7c0fb9a95c9d5a17', '[\"*\"]', '2023-11-10 04:20:20', NULL, '2023-11-10 03:48:07', '2023-11-10 04:20:20'),
(64, 'App\\Models\\User', 1, 'authToken', '89f2d71bddd9630a941116f1252b2f7c42f72a81031925bc15be3d0985fd6c01', '[\"*\"]', '2023-11-12 00:27:37', NULL, '2023-11-12 00:11:32', '2023-11-12 00:27:37'),
(65, 'App\\Models\\User', 1, 'authToken', '44a34bf116e8d15fdbed50f5b69edd4f65754f82d5b6036d927222b6fd22472b', '[\"*\"]', NULL, NULL, '2023-11-13 01:01:58', '2023-11-13 01:01:58'),
(66, 'App\\Models\\User', 1, 'authToken', 'd09f1c7ad93456c34c0212b17d1023b19581184e76b352251cb89a9f5a93bda7', '[\"*\"]', '2023-11-13 01:02:46', NULL, '2023-11-13 01:02:25', '2023-11-13 01:02:46'),
(67, 'App\\Models\\User', 1, 'authToken', 'bf77dced26b5b798a99f44e1fe686ac39d03d01764c318d060571c7626aa2749', '[\"*\"]', NULL, NULL, '2023-11-13 01:43:13', '2023-11-13 01:43:13'),
(68, 'App\\Models\\User', 1, 'authToken', '76955a80b93927993b7369a281be837aed4b6ab5f82e5fbfc2bc002692f487f9', '[\"*\"]', NULL, NULL, '2023-11-13 01:43:15', '2023-11-13 01:43:15'),
(69, 'App\\Models\\User', 1, 'authToken', 'b1c46c6656aaffdd45c580f8777de824c7eb2bf534bd3c5954591f0d5538e953', '[\"*\"]', '2023-11-13 01:46:13', NULL, '2023-11-13 01:43:15', '2023-11-13 01:46:13'),
(70, 'App\\Models\\User', 1, 'authToken', '71976424980a9c8e683049ead428262ac9b86b87abe76fc40ace154cc577644d', '[\"*\"]', '2023-11-13 03:19:26', NULL, '2023-11-13 01:53:04', '2023-11-13 03:19:26'),
(71, 'App\\Models\\User', 10, 'authToken', '38f6375d42650007874052d15c836e9c079cb9bce29e84828feca5969bc2caac', '[\"*\"]', NULL, NULL, '2023-11-13 03:24:46', '2023-11-13 03:24:46'),
(72, 'App\\Models\\User', 14, 'authToken', '80fa496361ef841be7a66b109f0a746286105f0b1557087323048f4da6294062', '[\"*\"]', NULL, NULL, '2023-11-13 03:28:10', '2023-11-13 03:28:10'),
(73, 'App\\Models\\User', 1, 'authToken', 'e890716e7ccb2ce21d92b3f95ba7bae944458b4333ce5ee7688c6167aa9806e9', '[\"*\"]', '2023-11-13 09:28:15', NULL, '2023-11-13 03:38:50', '2023-11-13 09:28:15'),
(74, 'App\\Models\\User', 1, 'authToken', '96cc19dc402d5e19f7b004cd58f6244ca82afd27d104a902e0aa2bd237cd64d5', '[\"*\"]', NULL, NULL, '2023-11-16 00:28:22', '2023-11-16 00:28:22'),
(75, 'App\\Models\\User', 1, 'authToken', '4df74f889ae7a1e252aee4d40168035d5096ae3e3977ac41ee5dd4c94eecaf44', '[\"*\"]', '2023-11-16 00:31:22', NULL, '2023-11-16 00:28:23', '2023-11-16 00:31:22'),
(76, 'App\\Models\\User', 1, 'authToken', '3164ea72a0519ea78a5219290cca83fa88cfc9ab1c4f0561660a6297ac9b04df', '[\"*\"]', '2023-11-16 01:29:21', NULL, '2023-11-16 01:28:59', '2023-11-16 01:29:21'),
(77, 'App\\Models\\User', 10, 'authToken', 'f31ff58b23865ccbb0c4e4228c22e8d6d96058d5da375bb074b917d052386e05', '[\"*\"]', NULL, NULL, '2023-11-24 09:50:19', '2023-11-24 09:50:19'),
(78, 'App\\Models\\User', 14, 'authToken', 'a6de36f0a706ea014a460a457a669d66c5da78558355e6aede245f9937c9bee2', '[\"*\"]', '2023-12-16 02:16:48', NULL, '2023-12-16 01:47:31', '2023-12-16 02:16:48'),
(79, 'App\\Models\\User', 14, 'authToken', '3f7a989e7adb53f51ab5d4296b0f32f0c2a5d76f2f3f3ea875afe30368b5d454', '[\"*\"]', '2024-01-07 02:50:05', NULL, '2024-01-07 02:49:46', '2024-01-07 02:50:05'),
(80, 'App\\Models\\User', 14, 'authToken', 'cdfef5ee79b9d973d394b3ce6ba2249300cb3bb3ebf771d374c8a5658d40cc39', '[\"*\"]', '2024-03-21 07:33:06', NULL, '2024-03-21 07:32:49', '2024-03-21 07:33:06');

-- --------------------------------------------------------

--
-- Table structure for table `registers`
--

CREATE TABLE `registers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `confirm_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `registers`
--

INSERT INTO `registers` (`id`, `full_name`, `email`, `contact`, `password`, `confirm_password`, `created_at`, `updated_at`) VALUES
(1, 'rajeshwari', 'rajeshwariganji1979@gmail.com', '0989787667', '$2y$10$9Dh1dz/6aLP5BC1Hp6xNPOBVcYmdReox6dRJ3aBSd1sbkzQzi8.hm', '$2y$10$t9FzRDeY3uQ7ass2c8ssd.FV4aCB7.0KM69jq/m.OZO5I0ngP0F5W', '2023-11-02 05:54:54', '2023-11-02 05:54:54'),
(2, 'rajeshwari', 'raniganji2910@gmail.com', '0989787667', '$2y$10$JGKoESDDizVF9GTYXfGNGOiNU/vUd6TukpwuKEWJhTypqfsEreHT2', '$2y$10$7b7NE5EUQIurIuO1DKE0ne4ATihN7O6eh1ZduCBnSBc8pKAMqcxI.', '2023-11-02 05:56:20', '2023-11-02 05:56:20'),
(3, 'rajeshwari', 'abc@gmail.com', '0989787667', '$2y$10$Gc3imRdHu61BGRkwV4Zpp.NL04xd1HRWJyCuUiloK1.U/44klSsHu', '$2y$10$xDRAdjydpaH2jCGwqo32KOBYs4b/.dtpI60DBrwxLnst2h6o.jflO', '2023-11-02 07:08:53', '2023-11-02 07:08:53'),
(4, 'tt', 'krish66@gmail.com', '4444444444', '$2y$10$TQ2V0BH.O2n7nE.eYG3ykewXnYrN/j.U5pExNEyWDCKUy/wlm8Yka', '$2y$10$wmUi/1th95PQUOwwKrdSfOHwoka3H8TpCEBgG7G0LGdxZntVevnxi', '2023-11-05 02:32:17', '2023-11-05 02:32:17'),
(5, 'Vachaspati', 'annaldasvachaspati@gmail.com', '7020270105', '$2y$10$GXv2Xppbg/r322d2hOgFp.9UgGD5hfNql9fIpPXYyAbGtmxIibgGa', '$2y$10$tjigCi.pN/dlp3rNP/AL/.yyvMTf0Qb81Q5gixeEwY1S7cFfXE1ma', '2023-11-05 02:33:22', '2023-11-05 02:33:22'),
(6, 'va', 'vachaspatiannaldas11@gmail.com', '7020270105', '$2y$10$i4.g.SEO1H7bJQ4DjsEon.ONJovGPNwSP2IRqtuM5R/fYKoDOdr.6', '$2y$10$ObVs5skwQ1Kuo93Kenvzo.FGk9qOCFylk9LViz.mPxFlMf55bP0aW', '2023-11-05 06:50:42', '2023-11-05 06:50:42'),
(7, 'mahesh', 'maheshyangandul@gmail.com', '9145706236', '$2y$10$UxpcODHORVE.z2Dp25T09.npi6G.fjtng6KnDfuzHNnTHmspdZvsi', '$2y$10$t9nPff9hpdaBfgZNeMhyQuSou8FB4nA.q33AGFqes8MrR3MMnda0O', '2023-11-05 08:12:00', '2023-11-05 08:12:00'),
(8, 'mahesh', 'youknowme6798@gmail.com', '7025863225', '$2y$10$jpb..33d.GI9y3SyykD9x.pbwTBd6UCxC0hebnRW5nHPpdvYvhhU2', '$2y$10$8pV.mUBU3dQWGq0c7JsU7uDWqQwyEl0az0a7ddqvSoq8NezPuN6oK', '2023-11-09 08:00:11', '2023-11-09 08:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_sector_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_rooms` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `name`, `images`, `description`, `status`, `price`, `hotel_id`, `hotel_sector_id`, `total_rooms`, `created_at`, `updated_at`) VALUES
(16, 'Deluxe Rooms City View', '[\"115809134109566.jpg\",\"115809134109577.jpg\",\"115809134109581.jpg\"]', 'Experience an exotic stay at every step in these rooms. These rooms offer you the best facilities and will make you want to come here again and again.', 'active', '15000', '3', '5', '0', '2023-11-04 06:28:09', '2023-12-16 01:39:35'),
(18, 'Deluxe Rooms Pool View', '[\"121147134109556.jpg\",\"121147134109562.jpg\",\"121147134109581.jpg\"]', 'Enjoy the view of the charming pool from these luxurious rooms. designed for your comfortable stay. The rooms are decked with all latest facilities that make your stay seamless and convenient. Experience a palatial and comfortable stay in these rooms at our business hotel in Solapur.', 'active', '25000', '3', '5', '12', '2023-11-06 06:41:47', '2023-11-09 06:53:41'),
(19, 'Executive Suite AC Room', '[\"164417494659771.jpg\",\"164417494659802.jpg\",\"164417494659805.jpg\"]', 'Rooms are the fascinating accommodation choices of the hotel. These rooms are stylishly designed to offer a satisfactory ambience. They are classily festooned with tiled/marble floorings and comfortable interiors. The amenities offered in the rooms are telephone connectivity, TV with satellite programming and private bathroom. Comp. Swimming Pool facility available .Comp. GYM available .', 'active', '2970', '4', NULL, '15', '2023-11-07 11:14:17', '2023-11-07 11:14:17'),
(20, 'Marriott Member Exclusive', '[\"061016459766082.jpg\",\"061016459766085.jpg\",\"061016459766087.jpg\",\"061016459766094.jpg\"]', 'Experience the resplendent JW Marriott Hotel Kolkata, a 5-star accommodation with understated elegance and sophistication. Located 16 kilometers from Netaji Subhash Chandra Bose Airport, our Kolkata lodging is midway between the airport and the city\'s old business district. Well-appointed rooms and suites are spacious and offer premium amenities. Four distinctive dining options include an inspired Asian restaurant and a discotheque offering vibrant nightlife.', 'active', '9000', '11', NULL, '10', '2023-11-08 00:40:16', '2023-11-09 05:19:21'),
(21, 'Superior', '[\"08261018318560.jpg\",\"08261018318594.jpg\",\"08261018318670.jpg\",\"08261028842646.jpg\",\"08261028842810.jpg\",\"08261028843127.jpg\"]', 'The Superior rooms in Kolkata are stylish and brings with it immaculate service, detailed comfort and holistic enjoyment. The living space is spread over 225 sq.ft. and comes with a host of herbal amenities and special services to suit your in-room business and leisure needs which is a rarity amongst upscale hotels in Kolkata .', 'active', '12000', '10', NULL, '15', '2023-11-08 02:56:10', '2023-11-08 02:56:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `user_role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'rajeshwari', 'rajeshwariganji1979@gmail.com', NULL, '$2y$10$XNuGMXUSrsVBAhSrA0hdZOUyiynrFov8b5a7/xlSAGmvLxUf4y0eK', NULL, 'admin', 'active', '2023-11-02 05:54:54', '2023-11-02 05:54:54'),
(3, 'rajeshwari', 'raniganji2910@gmail.com', NULL, '$2y$10$y83d388.EAilUkgCJle7l.ujZc3nO7CXW7W8Oe03uH2.sXMAbm.1i', NULL, 'customer', 'active', '2023-11-02 05:56:20', '2023-11-02 05:56:20'),
(4, 'rajeshwari', 'abc@gmail.com', NULL, '$2y$10$nHcxftlTDYbOT7vYRMqUyOe5IpFq/rxRL.J/LDqxmqxzA6By3Lk9.', NULL, 'customer', 'active', '2023-11-02 07:08:52', '2023-11-02 07:08:52'),
(9, 'tt', 'krish66@gmail.com', NULL, '$2y$10$8dudAx6VIhR5aTOHD1LFte2bGiYKYkz3OELXwI2Ryr2Oeicl8KcWi', NULL, 'customer', 'active', '2023-11-05 02:32:17', '2023-11-05 02:32:17'),
(10, 'Vachaspati', 'annaldasvachaspati@gmail.com', NULL, '$2y$10$WBZB3o1yKssyGnJf.QTUkOtmW48EfRFUr35y70AYeulxy6zbYnXKW', NULL, 'customer', 'active', '2023-11-05 02:33:22', '2023-11-05 02:33:22'),
(11, 'va', 'vachaspatiannaldas11@gmail.com', NULL, '$2y$10$cTjKE0m2r9tc5OgpZqEb2umerBbS2w0eR7vkqPj2Shs5Opw1kDTFS', NULL, 'customer', 'active', '2023-11-05 06:50:42', '2023-11-05 06:50:42'),
(13, 'mahesh', 'maheshyangandul@gmail.com', NULL, '$2y$10$G3C6FruRJ9MzzyN65kcYOeD6Cx4k4f9VW6J/9XwU6E5pEzGA2tW7G', NULL, 'hotel_admin', 'active', '2023-11-05 08:12:00', '2023-11-05 08:12:00'),
(14, 'krishna', 'krishna@gmail.com', NULL, '$2y$10$FsFLEuuysFBuk5/5coh4jOc8jQk29x6B0wYet5vguU.iz8fZo6UVa', NULL, 'hotel_admin', 'active', '2023-11-07 10:41:15', '2023-11-07 10:41:15'),
(17, 'mahesh', 'youknowme6798@gmail.com', NULL, '$2y$10$1QlS9lWP39HD0r.Zo2GVfeYKMW11uMr6CR9nhzn0ZWaJkO1sx7LSK', NULL, 'customer', 'active', '2023-11-09 08:00:11', '2023-11-09 08:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `role`, `status`, `created_at`, `updated_at`) VALUES
(2, 'abc', '1', '2023-11-02 07:40:50', '2023-11-02 07:40:50'),
(3, 'admin', 'active', '2023-11-02 08:56:49', '2023-11-02 08:56:49');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `name`, `email`, `contact`, `location`, `city`, `password`, `status`, `profile`, `created_at`, `updated_at`) VALUES
(4, 'Vachaspati Annaldas', 'annaldasvachaspati@gmail.com', '7020270105', 'Solapur', 'Solapur', '123', 'active', 'Vachaspati.png', '2023-11-06 00:04:42', '2023-11-06 00:04:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `availabilities`
--
ALTER TABLE `availabilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `festival_tbls`
--
ALTER TABLE `festival_tbls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotel_admins`
--
ALTER TABLE `hotel_admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotel_sectors`
--
ALTER TABLE `hotel_sectors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `availabilities`
--
ALTER TABLE `availabilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `festival_tbls`
--
ALTER TABLE `festival_tbls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `hotel_admins`
--
ALTER TABLE `hotel_admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hotel_sectors`
--
ALTER TABLE `hotel_sectors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `registers`
--
ALTER TABLE `registers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
