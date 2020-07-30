-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2020 at 01:28 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `earringholler`
--

-- --------------------------------------------------------

--
-- Table structure for table `earringpost`
--

CREATE TABLE `earringpost` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `text` varchar(550) NOT NULL,
  `post_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `likes` int(11) NOT NULL DEFAULT 0,
  `reply_to` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `earringpost`
--

INSERT INTO `earringpost` (`id`, `name`, `text`, `post_date`, `likes`, `reply_to`) VALUES
(1, 'BlueWillowPlate', 'Got a question for all the ladies out there, particularly ones in there 20\'s and 30\'s. What\'s your opinion about guys wearing earrings. Now, I\'m not talking about the huge dangling body piercing style earrings or the gigantic diamonds rappers wear. I\'m just talking about a small hoop or stud in the left (or both) ears. Some say, some guys look good wearing one. Others don\'t What kind of guys look good in an earring? What kind of look (hair styles/clothing) do you think go well with one? Just looking for opinions here.', '2020-05-31 02:33:21', 0, NULL),
(2, 'TheImportersWife', 'What are some opinions of a 13-year-old boy who wears earrings? What is an appropriate age for a child to get their ears pierced? As a parent, I face many questions as to how much freedom is good before it turns to worst.', '2020-05-31 03:56:42', 0, NULL),
(3, 'Lindsey_Mcfarren', 'If you wear earrings on both sides of your ears, does that mean you’re bi?', '2020-05-31 04:01:24', 0, NULL),
(4, 'Marylandkitten', 'Did you know? Men, were the first people in history to wear earrings. Used for body modification, accessorizing garments and keeping in trends, earrings have been among us since the beginning of time. With the changing times and cultures, many stereotypes have been raised and quelled with all genders falling for the allure of these tiny ornaments. It’s considered normal for females but for the males, questions arise as to why guys wear earrings at all.', '2020-05-31 04:06:36', 0, NULL),
(5, 'Summering', 'Yuk. Can\'t stand earrings on men. Of any kind at all. I think a lot of guys are getting too \"femmy\". I don\'t like men wearing jewelry, or styling their hair, either. I don\'t mean like using gel and a comb to keep it tidy, that\'s fine, but going to the salon to have it styled and highlighted and straightened and all that stuff. That\'s not what men do, at least in my book. I\'m kinda old school when it comes to how people dress and present themselves. When I see a guy and he looks all \"done up\" with the fake hair, fake tan, earrings, etc...', '2020-05-31 07:29:11', 0, NULL),
(6, 'MooksterL1', 'HOOP EARRINGS CRITICISED AS CULTURAL APPROPRIATION\r\n\'A style that links so heavily with identity is not taken seriously until it is seen on a white woman\' What are your thoughts? ', '2020-05-31 09:35:21', 0, NULL),
(7, 'babigyrl5', 'I LOVE the look of stretched ears on guys. Maybe it\'s because I have them too, but I\'ve always been attracted to the tattooed, stretched ears rocker type of guy. My boyfriend doesn\'t have any piercings or tattoos though, so it goes to show you that you fall for the person him/herself and not what they look like', '2020-05-31 09:39:37', 1, NULL),
(8, 'gizmo980', 'No, it doesn\'t. I\'ve heard it all…that\'s like, if you were a boy and wear your one earring on the right, your gay. So false…that might have been the way back in the 80\'s, but this is 2018. Things change…get with the times. It couldn\'t mean you sleep on the left and don\'t want to irritate it. LoL people say the weirdest things sometimes. As far as I\'m concerned, only a bully would poke fun and say something like that.', '2020-05-31 09:48:55', 0, 3),
(9, 'user30320407', 'Did he buy the earrings? If yes, nothing. If someone else bought them and gave them to him, then nothing. If you bought them, and don’t want him wearing them, then take them away. Simple as that.\r\n\r\nAs of the time I’m writing this, you’ve presented no reason that he shouldn’t wear them, so I’m going to assume that there’s no good reason he shouldn’t. As such, let him go for it.', '2020-05-31 09:52:43', 7, 2),
(10, 'user30320407', 'Um…no. Having earrings on both ears means you have earrings on both ears. And if you’re attracted to men and women then you’re bisexual. Totally separate. If we’re going to talk about the social silliness that were popular in the 70’s and perpetuated to the late 90\'s (the form of thinking thankfully much rarer now) even then, no, there was never a social stereotype of ‘both ears’. It started with popular gay icons and men in general seeming to prefer the left ear for getting pierced, and jewellery seen as a more feminine practice was teased.', '2020-05-31 09:56:55', 0, 3),
(11, 'pitt_transplant', 'I love earrings on a man, but it really depends on the jewelry and the man. I once dated a guy with one in each ear, the septum, tongue, belly button and both nipples. A bit much, but it looked sexy on him! Anyway, as long as it doesn\'t look too \"hair-band\" I\'m all for them. My favorite jewelry, btw, is the circular barbell with captive or screwed-on beads... that\'s what I wear in my upper ear piercings. About the hair style, I think any hairdo can work with an earring.', '2020-05-31 10:00:38', 0, 1),
(12, 'LSPITZrren', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris, dignissim aliquet nisl congue ut. Sed tincidunt sem eget nisl ornare blandit. Mauris pulvinar bibendum pellentesque. Suspendisse potenti. Aenean luctus id sapien ut sagittis. Ut sapien arcu, sagittis quis finibus non, pharetra sagittis tellus.', '2020-05-31 20:35:05', 0, NULL),
(13, 'Anonymus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris, dignissim aliquet nisl congue ut. Sed tincidunt sem eget nisl ornare blandit. Mauris pulvinar bibendum pellentesque. Suspendisse potenti. Aenean luctus id sapien ut sagittis. ', '2020-05-31 22:30:26', 0, NULL),
(14, 'TestUser1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id.', '2020-06-01 00:26:12', 0, NULL),
(15, 'Anonymus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris.', '2020-06-01 01:07:06', 0, NULL),
(16, 'Woof Woof Woof!', 'I can\'t stand that thing they put in their ear to stretch that huge hole in their ear. It reminds me of how they put a ring in a bulls nose so if your close to him and he gets out of control, you can grab that ring and bring him to his knees. I\'m sure that\'s not the intend but that\'s what it reminds me of.', '2020-06-01 02:58:33', 1, NULL),
(17, 'LSPITZrren', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris, dignissim aliquet nisl congue ut. Sed tincidunt sem eget nisl ornare blandit. Mauris pulvinar bibendum pellentesque.', '2020-06-02 00:24:30', 0, 4),
(18, 'CountryPrideMaster', 'I used to date a guy who had a pierced ear. I have two holes in my left ear, so we got a pair of studs that were his birthstone, (sapphire) I wore one in my extra hole and he wore the other. It was kind of cool. BUT that was way back in the 90,s.', '2020-06-02 01:04:32', 0, 16),
(19, 'CountryPrideMaster', 'I used to date a guy who had a pierced ear. I have two holes in my left ear, so we got a pair of studs that were his birthstone, (sapphire) I wore one in my extra hole and he wore the other. It was kind of cool. BUT that was way back in the 90,s.', '2020-06-02 01:04:42', 0, 16),
(20, 'AJAX ', 'In present day, a man who wears an earring could have one, more or no reason for wearing it. It all depends on where and how he grew up, things he did or didn’t do or wishes he could do and simply if he wants to or not.', '2020-06-02 03:07:00', 0, 16),
(21, 'To Rebel', 'If you ask them, guys will tell you the reason they wear a pair of earrings is for the simple fact that they have two ear lobes, earrings come in a pair and quite boldly, they like it and that’s all that matters.', '2020-06-02 03:32:32', 0, 16),
(22, 'Woof Woof Woof!', 'Presenting your Sexuality or Making a Statement. While it was usual for criminals to use earrings as an identifier between themselves, this is no longer the case. Wearing a stud on the right ear may mean that a man is homosexual but this notion is fading fast. In this new age people don’t seem to care so much about what your earring says about you.', '2020-06-02 03:54:25', 0, 13),
(23, 'Mayo Yummo!', 'As a Symbol of Status or Wealth. If you take the case of diamonds, they are the rarest, hardest and most precious metals in the world and they are extremely high value. Some wealthy people, other than using these gems just for decoration, they invest in them and keep them as a form of safety cushion that they can rely on if all hell breaks loose and they need some financial assistance.', '2020-06-02 04:06:55', 0, NULL),
(24, 'songinthewind7', 'Actors in Character. Most often than not, movies are fictitious and over grammaticized to capture and keep our attention.  It’s no wonder they have such a huge influence in daily life. Sometimes these actors who we so adore, portray a certain lifestyle that we consider cool but in essence, it is all an act. There is no doubt that when young impressionable guys see these images, it increases their desire to want to be like someone they admire.', '2020-06-02 04:08:46', 0, 23),
(26, 'LSZone0001', 'Etiam id turpis turpis. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris, dignissim aliquet nisl congue ut. Sed tincidunt sem eget nisl ornare blandit. Mauris pulvinar bibendum pellentesque. Suspendisse potenti. Aenean luctus id sapien ut sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien arcu, sagittis quis finibus non, pharetra sagittis tellus.', '2020-06-03 00:25:17', 0, NULL),
(27, 'maximusCommodo ', 'Sed tincidunt sem eget nisl ornare blandit. Praesent commodo maximus massa, et rutrum orci venenatis id. Phasellus volutpat neque mauris, dignissim aliquet nisl congue ut. ', '2020-06-03 04:35:04', 0, 26),
(28, 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci neque, suscipit et fermentum at, pretium sit amet massa. Suspendisse elementum erat volutpat tempor laoreet. Morbi gravida enim vel nisl convallis, vel commodo felis dignissim. Sed molestie velit ac neque vestibulum semper.', '2020-06-04 03:24:05', 0, 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `earringpost`
--
ALTER TABLE `earringpost`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reply_to` (`reply_to`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `earringpost`
--
ALTER TABLE `earringpost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `earringpost`
--
ALTER TABLE `earringpost`
  ADD CONSTRAINT `earringpost_ibfk_1` FOREIGN KEY (`reply_to`) REFERENCES `earringpost` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
