import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  
    articles = [
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Ann-marie Alcántara",
    title: "How to Be Internet Famous and Anonymous at the Same Time",
    description: "Cartoons, anime characters and digital pets are taking over Twitch as virtual streamers grow their followings—without revealing their faces or names.",
    "url": "https://www.wsj.com/articles/how-to-be-internet-famous-and-anonymous-at-the-same-time-11664048343",
    urlToImage: "https://images.wsj.net/im-630156/social",
    publishedAt: "2022-09-25T12:11:52Z",
    content: "Several times a week, hundreds of people log onto Amazons Twitch service to watch a Betty Boop-like cartoon character named \r\nPumpkin Potion. Wearing a spider-web-pattern dress, she plays piano and c… [+311 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Dominique Mosbergen | Photographs by Travis Dove for The Wall Street Journal",
    title: "Covid-19 Has Changed Funeral Business Forever - The Wall Street Journal",
    description: "Revenue boomed and funeral homes expanded as many morticians also buried friends and colleagues.",
    url: "https://www.wsj.com/articles/covid-19-has-changed-funeral-business-forever-11664048796",
    urlToImage: "https://images.wsj.net/im-630170/social",
    publishedAt: "2022-09-25T11:00:00Z",
    content: "Brian Myers spent many nights during the pandemic embalming one person after anothersome of them close friendsuntil morning dawned.\r\nHis business, Myers Mortuary &amp; Cremation Services in Columbia,… [+112 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Richard Rubin",
    title: "Amazon, Berkshire Hathaway Could Be Among Top Payers of New Minimum Tax",
    description: "Researchers analyzed securities filings to determine what companies would have paid if the tax had been in place last year and found just six would have paid half of the estimated $32 billion the levy would have generated.",
    "url": "https://www.wsj.com/articles/amazon-berkshire-hathaway-could-be-among-top-payers-of-new-minimum-tax-11664098382",
    urlToImage: "https://images.wsj.net/im-629023/social",
    publishedAt: "2022-09-25T09:48:12Z",
    content: "WASHINGTONA handful of large companies, such as Berkshire Hathaway and Amazon.com could bear most of the burden from a 15% \r\ncorporate minimum tax President Biden signed into law last month.Researche… [+420 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "River Davis",
    title: "Toyota Engages With Critics of Its EV Push",
    description: "Toyota Motor is addressing critics who say it is behind rivals in the race for greener cars, nearly a year after the auto maker pledged to spend billions of dollars expanding its electric-vehicle lineup.",
    "url": "https://www.wsj.com/articles/toyota-engages-with-critics-of-its-ev-push-11664098382",
    urlToImage: "https://images.wsj.net/im-629537/social",
    publishedAt: "2022-09-25T09:36:47Z",
    content: "Toyota Motor is addressing critics who say it is behind rivals in the race for greener cars, nearly a year after the auto maker pledged to spend billions of dollars expanding its electric-vehicle lin… [+242 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Julie Jargon",
    title: "She Tried to Block Eating-Disorder Content on TikTok. It Still Pops Up Daily.",
    description: "Despite TikTok’s efforts, the algorithm can’t filter it all. And some people find workarounds to access the videos, using Google searches, misspelled hashtags and more.",
    "url": "https://www.wsj.com/articles/she-tried-to-block-eating-disorder-content-on-tiktok-it-still-pops-up-daily-11663982648",
    urlToImage: "https://images.wsj.net/im-629858/social",
    publishedAt: "2022-09-24T13:27:42Z",
    content: "Naomi Sanders tried to set up her TikTok account so she wouldnt see videos about eating disorders, but she says theyre impossible to avoid.\r\nI still see posts related to eating disorders on my feed a… [+163 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Christopher Mims",
    title: "Returning to the Office? Let’s Keep the Line Between Work and Home Blurry",
    description: "It’s tempting to use this moment to redraw the boundary between our work and personal lives. That isn’t good for anybody.",
    "url": "https://www.wsj.com/articles/return-to-office-work-life-separation-11663790625",
    urlToImage: "https://images.wsj.net/im-626872/social",
    publishedAt: "2022-09-24T12:22:20Z",
    content: "Its about time that we return to a simpler erawhen work was work, and home was home. \r\nThat seems to be the message I hear from bosses these days, and even from a lot of employees. After 2 ½ years, s… [+281 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Stephen Kalin",
    title: "Russia Expands Use of Iranian Combat Drones in Ukraine - The Wall Street Journal",
    description: "<ol><li>Russia Expands Use of Iranian Combat Drones in Ukraine  The Wall Street Journal\r\n</li><li>Ukraine strips diplomatic ties with Iran over 'evil' drone supplies to Russia war effort  Fox News\r\n</li><li>LATEST UPDATES: Ukraine downgrades ties with Iran, R…",
    "url": "https://www.wsj.com/articles/russia-expands-use-of-iranian-combat-drones-in-ukraine-11664009458",
    urlToImage: "https://images.wsj.net/im-630472/social",
    publishedAt: "2022-09-24T11:01:00Z",
    content: "KYIV, UkraineUkraine shot down more than a dozen Iranian combat drones across the front lines this week as Russia expands the use of a foreign weapons system that Ukrainian commanders say \r\nhas infli… [+307 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Christopher Mims",
    title: "Why Even Big Tech Companies Keep Getting Hacked—And What They Plan To Do About It",
    description: "Hackers keep tricking employees to gain access to corporate networks, so companies are changing their approach to make it harder to wreak havoc once they’re in.",
    "url": "https://www.wsj.com/articles/cyberattacks-hacking-lapsuss-zero-trust-okta-uber-rockstar-11663969967",
    urlToImage: "https://images.wsj.net/im-630328/social",
    publishedAt: "2022-09-24T04:17:04Z",
    content: "The companies that should know best how to fight hackers, tech firms, have reached an arresting conclusion: The weakest link in security, as its been since the Trojan War, is humans.\r\nIncreasingly, t… [+43 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jinjoo Lee",
    title: "America Has Lost Its Oil Buffer",
    description: "The Strategic Petroleum Reserve is at historically low levels when there are still many supply uncertainties.",
    "url": "https://www.wsj.com/articles/america-has-lost-its-oil-buffer-11663821015",
    urlToImage: "https://images.wsj.net/im-627774/social",
    publishedAt: "2022-09-24T01:59:25Z",
    content: "Brace for impact: The U.S. is running out of a cushion reserved for oil shocks.\r\nThe U.S. Energy Information Administration said Wednesday that the Strategic Petroleum Reserve declined by nearly 7 mi… [+187 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nora Eckert",
    title: "Ford's Latest Supply-Chain Snarl: Not Enough Blue Oval Badges - WSJ - The Wall Street Journal",
    description: "<ol><li>Ford's Latest Supply-Chain Snarl: Not Enough Blue Oval Badges - WSJ  The Wall Street Journal\r\n</li><li>The inactive Kentucky Speedway is now a storage facility for a massive collection of unfinished Ford trucks visible from space  Yahoo Sports\r\n</li><…",
    "url": "https://www.wsj.com/articles/fords-latest-supply-chain-snarl-not-enough-blue-oval-badges-11663944141",
    urlToImage: "https://images.wsj.net/im-629555/social",
    publishedAt: "2022-09-23T14:42:00Z",
    content: "Ford Motor Co. has delayed deliveries of certain vehicles because it didnt have the blue oval badges that go on them, in another example of how \r\nsupply-chain challenges have hit auto makers.The car … [+356 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Sarah Krouse",
    title: "Netflix Reduces Payments for Comedy Specials in Some New Deals",
    description: "The streaming giant is paying around $200,000 to license some specials for two years, instead of writing a bigger check to buy them outright.",
    "url": "https://www.wsj.com/articles/netflix-reduces-payments-for-comedy-specials-in-some-new-deals-11663891960",
    urlToImage: "https://images.wsj.net/im-628994/social",
    publishedAt: "2022-09-23T09:37:20Z",
    content: "Netflix has become a major platform for comedians, funding an array of specials and delivering them to its audience of more than 220 million subscribers.\r\nNow, the streaming giant is changing how it … [+209 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Kyle Smith",
    title: "‘Don’t Worry Darling’ Review: Trouble in Paradise - The Wall Street Journal",
    description: "<ol><li>‘Don’t Worry Darling’ Review: Trouble in Paradise  The Wall Street Journal\r\n</li><li>Don’t Worry Darling review: As slick and dumb as Harry Styles promised  Polygon\r\n</li><li>'Don't Worry Darling' Review: Florence Pugh and Harry Styles Get Weird  CNET…",
    "url": "https://www.wsj.com/articles/dont-worry-darling-review-olivia-wilde-katie-silberman-carey-van-dyke-shane-van-dyke-florence-pugh-katie-byron-matthew-libatique-kiki-layne-timothy-simons-harry-styles-chris-pine-11663885078",
    urlToImage: "https://images.wsj.net/im-627886/social",
    publishedAt: "2022-09-22T22:19:00Z",
    content: "Just as a bonsai tree is somewhat overshadowed by a giant sequoia, Dont Worry Darling the film comes to us somewhat overshadowed by Dont Worry Darling the generator of behind-the-scenes gossip. Thats… [+690 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Corinne Ramey",
    title: "New York Suit Against Trump Mixes Routine Business Law, Uncommon Allegations",
    description: "Case against former president, three of his children and his company centers on state law that gives the attorney general broad power to address persistent fraud in business.",
    "url": "https://www.wsj.com/articles/new-york-suit-against-trump-mixes-routine-business-law-uncommon-allegations-11663881754",
    urlToImage: "https://images.wsj.net/im-629331/social",
    publishedAt: "2022-09-22T21:22:00Z",
    content: "The \r\nNew York attorney generals lawsuit against former President Donald Trump uses a common state business law to make allegations about property valuations, which lawyers say are rarely the focus o… [+433 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Michael S. Derby",
    title: "A Day After Fed Raises Rates, Reverse Repos Hit New Record - The Wall Street Journal",
    description: "<ol><li>A Day After Fed Raises Rates, Reverse Repos Hit New Record  The Wall Street Journal\r\n</li><li>Central Banks Raise Interest Rates, Fearing Worse Pain Later  The New York Times\r\n</li><li>Yesterday's Fed rate hike will be looked back on as a mistake, say…",
    "url": "https://www.wsj.com/articles/a-day-after-fed-raises-rates-reverse-repos-hit-new-record-11663877541",
    urlToImage: "https://images.wsj.net/im-629246/social",
    publishedAt: "2022-09-22T20:12:00Z",
    content: "A wall of cash is continuing to flow into a central bank facility designed to help control short-term interest rates, even as officials expect activity there to decline over time.\r\nOn Thursday, the F… [+275 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Michelle Chan",
    title: "Audits of Chinese Companies Start to Face U.S. Inspections",
    description: "The Public Company Accounting Oversight Board is to determine whether Alibaba, Yum China and other firms can keep their listings on American stock exchanges.",
    "url": "https://www.wsj.com/articles/audits-of-chinese-companies-start-to-face-u-s-inspections-11663875097",
    urlToImage: "https://images.wsj.net/im-629158/social",
    publishedAt: "2022-09-22T19:45:00Z",
    content: "U.S. regulators have started inspecting China-based audits, kicking off a monthslong process that will determine whether companies from Alibaba Group Holding Ltd. to Yum China Holdings Inc. can remai… [+334 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Christopher Mims",
    title: "Humana, Other Potential Buyers Circle Cano Health, Sources Say",
    description: "Humana Inc. and other possible buyers are circling Cano Health Inc., according to people familiar with the situation, as healthcare heavyweights scramble to snap up primary-care providers.",
    "url": "https://www.wsj.com/articles/humana-other-potential-buyers-circle-cano-health-sources-say-11663874254",
    urlToImage: "https://images.wsj.net/im-629161/social",
    publishedAt: "2022-09-22T19:21:43Z",
    content: "Humana and other possible buyers are circling Cano Health according to people familiar with the situation, as healthcare heavyweights scramble to snap up primary-care providers.\r\nThe talks are seriou… [+324 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Joe Flint",
    title: "Amazon’s ‘Thursday Night Football’ NFL Debut Draws 13 Million Viewers",
    description: "The company saw more U.S. sign-ups for Prime during the 3-hour broadcast than in any other time in its history.",
    "url": "https://www.wsj.com/articles/amazons-thursday-night-football-nfl-debut-draws-13-million-viewers-11663859944",
    urlToImage: "https://images.wsj.net/im-628795/social",
    publishedAt: "2022-09-22T15:19:00Z",
    content: "About 13 million people watched the first Thursday Night Football regular-season game to be available primarily on Amazon.com Prime Video streaming service, according to Nielsen data.\r\nLast weeks gam… [+413 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Laine Higgins",
    title: "Rise of 32-Year-Old College Football Player...",
    description: "College football careers are being stretched from four or five years to as many as eight; ‘I’ve been here since it feels like 1920’",
    "url": "https://www.wsj.com/articles/college-football-players-old-age-11663856768",
    urlToImage: "https://images.wsj.net/im-628773/social",
    publishedAt: "2022-09-22T15:16:38Z",
    content: "Tom Brady briefly tried out retirement, but at age 45 hes still a few years away from being able to fully join the AARP. The University of Georgias soon-to-be 25-year-old quarterback Stetson Bennett … [+538 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nicole Friedman",
    title: "After Years of Low Mortgage Rates, Home Sellers Are Scarce",
    description: "Many homeowners locked in the “golden handcuffs” of low mortgage costs find it too daunting to sell their homes now that rates are so much higher.",
    "url": "https://www.wsj.com/articles/after-years-of-low-mortgage-rates-home-sellers-are-scarce-11663810759",
    urlToImage: "https://images.wsj.net/im-628055/social",
    publishedAt: "2022-09-22T14:50:00Z",
    content: "Homeowners with low mortgage rates are balking at the prospect of selling their homes to borrow at much higher rates for their next homes, a development that could limit the supply of houses for sale… [+368 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "James Mackintosh",
    title: "The Market Still Isn’t Priced For a Proper Recession",
    description: "Markets are doing what they always do, hoping against hope that there’s no recession, or at least a very mild one, right up to the last minute.",
    "url": "https://www.wsj.com/articles/the-market-still-isnt-priced-for-a-proper-recession-11663857523",
    urlToImage: "https://images.wsj.net/im-628730/social",
    publishedAt: "2022-09-22T14:38:00Z",
    content: "The stock market is almost always late to wake up to the threat of recession, but its increasingly \r\nhard to miss the warnings from the Federal Reserve. Not only might there be a recession, but the F… [+531 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Will Horner",
    title: "Bank of England Is Latest Central Bank to Raise Rates Following Fed Increase - The Wall Street Journal",
    description: "<ol><li>Bank of England Is Latest Central Bank to Raise Rates Following Fed Increase  The Wall Street Journal\r\n</li><li>Bank of England hikes by 50 basis points, says UK may already be in recession  CNBC\r\n</li><li>Bank of England raises benchmark rate by 50 b…",
    "url": "https://www.wsj.com/articles/bank-of-england-raises-rates-for-seventh-successive-time-to-fight-inflation-11663844759",
    urlToImage: "https://images.wsj.net/im-628834/social",
    publishedAt: "2022-09-22T14:30:00Z",
    content: "LONDONCentral banks and governments around the world \r\nmoved to increase interest rates or support their currencies after the Federal Reserve raised rates and signaled that they would remain high for… [+504 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nicole Nguyen",
    title: "AirPods Pro 2nd-Gen Review: Better Noise Canceling, Easier to Find When Lost",
    description: "At a glance, this year’s Pros look unchanged from the previous model. But new chips improve noise-canceling, sound quality and findability when you misplace your case.",
    "url": "https://www.wsj.com/articles/airpods-pro-2nd-gen-review-better-noise-canceling-easier-to-find-when-lost-11663854390",
    urlToImage: "https://images.wsj.net/im-628123/social",
    publishedAt: "2022-09-22T13:57:05Z",
    content: "I was rushing out the door when I accidentally grabbed my old AirPods Pro, not the new ones I was supposed to be testing. Thats how similar they look. But when I put them in my ears, I could immediat… [+166 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Katherine Clarke",
    title: "Lux Home Market Posts Biggest Decline in Decade...",
    description: "Lux Home Market Posts Biggest Decline in Decade...\r\n\n \n \n \n (Third column, 1st story, link)\r\n\n \r\n\n \r\n\n \n Related stories:'Like Crickets'...",
    "url": "https://www.wsj.com/articles/the-luxury-home-market-posts-its-biggest-decline-in-a-decade-its-like-crickets-11663795015",
    urlToImage: "https://images.wsj.net/im-627523/social",
    publishedAt: "2022-09-22T12:16:40Z",
    content: "When Nancy Lam upgraded in January to a home closer to her childs school in the San Francisco Bay Area, she thought she had plenty of time to list her old house, a five-bedroom modern home in the sou… [+436 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Newley Purnell",
    title: "Proton CEO Is Shutting Down India VPN Servers to Protest Cybersecurity Rules",
    description: "Switzerland’s Proton VPN is pulling its servers from India, the latest provider to protest the country’s new cybersecurity rules.",
    "url": "https://www.wsj.com/articles/proton-ceo-is-shutting-down-india-vpn-servers-to-protest-cybersecurity-rules-11663834156",
    urlToImage: "https://images.wsj.net/im-628596/social",
    publishedAt: "2022-09-22T08:17:55Z",
    content: "The Swiss company behind well-known virtual-private-network service Proton VPN is pulling its servers from India, the latest provider to do so in response to new government rules that companies and r… [+367 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Joseph Pisani",
    title: "Ted Lasso, AFC Richmond Join ‘FIFA 23’",
    description: "The fictional coach and team from the hit Apple TV+ show will be new choices in the latest version of the popular soccer videogame franchise.",
    "url": "https://www.wsj.com/articles/ted-lasso-afc-richmond-join-fifa-23-11663791147",
    urlToImage: "https://images.wsj.net/im-628137/social",
    publishedAt: "2022-09-21T20:42:12Z",
    content: "Ted Lasso is heading to a premier leagueat least in a videogame.\r\nThe fictional character, portrayed on the hit Apple TV+ show by Jason Sudeikis, will be playable in FIFA 23, the latest version of th… [+87 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Catherine Stupp",
    title: "After Prison, Hackers Face Tech Restrictions, Limited Job Prospects - The Wall Street Journal",
    description: "Security leaders may confront the decision to hire or reject a postprison job candidate as cybercrime grows and more hackers move through the justice system",
    "url": "https://www.wsj.com/articles/after-prison-hackers-face-tech-restrictions-limited-job-prospects-11663788389",
    urlToImage: "https://images.wsj.net/im-628063/social",
    publishedAt: "2022-09-21T19:26:00Z",
    content: "As cybercrime increases and more hackers move through the justice system, those released from prison say they find it hard to land a job.Hackers who go to prison in the U.S. and many European countri… [+6422 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "The Wall Street Journal",
    title: "Meta and Google are cutting staff. Just don't mention layoffs.",
    description: "Meta and Google are quietly laying off employees by reorganizing departments and giving employees a limited window to apply for other roles within the company.",
    "url": "https://www.wsj.com/articles/meta-and-google-are-cutting-staff-just-dont-mention-layoffs-11663778729?mod=hp_lead_pos2",
    urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/facebook-dislike-button.jpg?ve=1&tl=1",
    publishedAt: "2022-09-21T19:06:19Z",
    content: "In response to stalling growth and intense competition, Meta Platforms Inc. executives have spoken of cost cuts, hiring freezes and \"ruthless prioritization.\" One word the company hasn’t used: layoff… [+8325 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Sarah Nassauer",
    title: "Walmart Slows Holiday Hiring With Plan to Add 40000 Seasonal Workers - The Wall Street Journal",
    description: "<ol><li>Walmart Slows Holiday Hiring With Plan to Add 40000 Seasonal Workers  The Wall Street Journal\r\n</li><li>Walmart to hire 40000 holiday workers vs. 150000 in 2021  Yahoo Finance\r\n</li><li>Walmart plans to hire 40,000 workers for the holiday season  CNBC…",
    "url": "https://www.wsj.com/articles/walmart-to-hire-fewer-workers-for-holiday-shopping-season-11663765200",
    urlToImage: "https://images.wsj.net/im-627393/social",
    publishedAt: "2022-09-21T17:27:00Z",
    content: "At Walmart holiday hiring is cooling along with demand for patio furniture and apparel.\r\nThe company said Wednesday that it plans to hire around 40,000 mostly seasonal workers to serve shoppers over … [+301 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Katy Stech Ferek",
    title: "Senate Set to Vote on Climate Treaty Amendment Cutting HFCs in Air Conditioners - The Wall Street Journal",
    description: "<ol><li>Senate Set to Vote on Climate Treaty Amendment Cutting HFCs in Air Conditioners  The Wall Street Journal\r\n</li><li>Analysis | Senate set to approve treaty fighting climate super-pollutants  The Washington Post\r\n</li><li>Opinion | Senate should ratify …",
    "url": "https://www.wsj.com/articles/senate-set-to-vote-on-climate-treaty-amendment-cutting-hfcs-in-air-conditioners-11663767560",
    urlToImage: "https://images.wsj.net/im-627247/social",
    publishedAt: "2022-09-21T13:39:00Z",
    content: "WASHINGTONSenate lawmakers on Wednesday are expected to vote to ratify an industry-backed climate treaty amendment that would commit the U.S. to reducing refrigerant chemicals that contribute to \r\ncl… [+356 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "wsj",
    title: "Young Palestinians Battle Israeli Troops and Palestinian Authority, Deepening Unrest...",
    description: "The Palestinian Authority is losing its grip over the northern West Bank, opening up a potential leadership vacuum.",
    "url": "https://www.wsj.com/articles/young-palestinians-battle-israeli-troops-and-the-palestinian-authority-deepening-unrest-11663761718",
    urlToImage: "https://images.wsj.net/im-627174/social",
    publishedAt: "2022-09-21T13:00:11Z",
    content: "Young Palestinians Battle Israeli Troops and the Palestinian Authority, Deepening Unrest Listen to article(2 minutes)NABLUS, West Bank—For young Palestinians in the Balata refugee camp, sleep begins … [+1274 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Anne Steele",
    title: "Warner Music Set to Name YouTube Business Chief Robert Kyncl Next CEO - WSJ - The Wall Street Journal",
    description: "Kyncl, who will succeed Steve Cooper next year, brings tech experience to an industry looking for growth beyond streaming.",
    "url": "https://www.wsj.com/articles/warner-music-set-to-name-youtube-business-chief-robert-kyncl-next-ceo-11663763821",
    urlToImage: "https://images.wsj.net/im-627619/social",
    publishedAt: "2022-09-21T12:37:00Z",
    content: "Warner Music Group Corp. will name outgoing YouTube business chief Robert Kyncl as its next chief executive, according to a person familiar with the hiring, betting on a tech veteran as the industry … [+201 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "John Anderson",
    title: "'BATALI: FALL OF CHEF SUPERSTAR' Review: The Missing Ingredient...",
    description: "'BATALI: FALL OF CHEF SUPERSTAR' Review: The Missing Ingredient...\r\n\n \n \n \n (Third column, 14th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Ron Jeremy Rape Accuser Comes Forward: 'I Wondered if He Planned to Kill Me'...\r\n\n \r\n\n \n \n Drudge Report Feed needs your …",
    "url": "https://www.wsj.com/articles/batali-the-fall-of-a-superstar-chef-review-mario-batali-singeli-agnew-letitia-james-ken-friedman-april-bloomfield-11663706476",
    urlToImage: "https://images.wsj.net/im-626935/social",
    publishedAt: "2022-09-21T12:07:42Z",
    content: "Theres a word that people use to describe men who get sloppy drunk, grope women, bully their subordinates and, when they issue a letter of public apology, include a recipe for cinnamon rolls. The wor… [+567 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Joshua Robinson and Andrew Beaton",
    title: "The Question Behind the Magnus Carlsen-Hans Niemann Drama: How to Cheat at Chess - The Wall Street Journal",
    description: "<ol><li>The Question Behind the Magnus Carlsen-Hans Niemann Drama: How to Cheat at Chess  The Wall Street Journal\r\n</li><li>Magnus Carlsen quits match without explanation amid apparent feud with fellow grandmaster Hans Niemann  CNN\r\n</li><li>Magnus Carlsen re…",
    "url": "https://www.wsj.com/articles/chess-cheating-magnus-carlsen-hans-niemann-11663751262",
    urlToImage: "https://images.wsj.net/im-627493/social",
    publishedAt: "2022-09-21T12:00:00Z",
    content: "World champion Magnus Carlsen has set the chess world on fire in recent weeks while barely saying a word. First, he abruptly quit a prestigious tournament in St. Louis after a defeat in early Septemb… [+201 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jim Carlton | Photographs by Andri Tambunan for The Wall Street Journal",
    title: "Smoke From Mosquito Fire Shrouds Lake Tahoe Despite California's Mild Fire Season - The Wall Street Journal",
    description: "In a relatively mild year for wildfires in California, heavy smoke downwind of the blazes can wreak havoc with tourism businesses—and raise health concerns.",
    "url": "https://www.wsj.com/articles/smoke-from-mosquito-fire-shrouds-lake-tahoe-despite-californias-mild-fire-season-11663724870",
    urlToImage: "https://images.wsj.net/im-627254/social",
    publishedAt: "2022-09-21T12:00:00Z",
    content: "TAHOE VISTA, Calif.Like many local residents in this shorefront community, Heidi Hill Drum cherishes the breathtaking views of Lake Tahoe. But one evening earlier this month, she saw something ominou… [+254 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jan Wolfe",
    title: "Video Footage Shows Trump Ally Examining Georgia Voting Equipment - The Wall Street Journal",
    description: "<ol><li>Video Footage Shows Trump Ally Examining Georgia Voting Equipment  The Wall Street Journal\r\n</li><li>Video shows fake Trump elector spent hours inside GA elections office  CNN\r\n</li><li>Videos Show Trump Allies Handling Georgia Voting Equipment  The N…",
    "url": "https://www.wsj.com/articles/video-footage-shows-trump-ally-examining-georgia-voting-equipment-11663711856",
    urlToImage: "https://images.wsj.net/im-627204/social",
    publishedAt: "2022-09-20T22:10:00Z",
    content: "WASHINGTONA former Republican Party official helped a computer forensics firm inspect voting equipment in Georgia and then made misleading statements under oath about her role in the episode, voting-… [+293 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Isabelle Bousquette",
    title: "Venture Capitalists to Tech Startups: Embrace the Downturn - The Wall Street Journal",
    description: "Venture Capitalists to Tech Startups: Embrace the Downturn  The Wall Street Journal",
    "url": "https://www.wsj.com/articles/venture-capitalists-to-tech-startups-embrace-the-downturn-11663705011",
    urlToImage: "https://images.wsj.net/im-627369/social",
    publishedAt: "2022-09-20T20:16:00Z",
    content: "Enterprise tech startups are continuing to innovate amid tighter economic conditions, fueled by demand from companies who fear underinvestment in tech could lose them market share, venture partners s… [+2092 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Christopher Mims",
    title: "Can You Actually Ditch Your Car for an E-Bike? Maybe",
    description: "As more cities improve their biking infrastructure, some Americans have found they no longer need their gas-powered wheels.",
    "url": "https://www.wsj.com/articles/e-bike-review-can-you-actually-ditch-your-car-for-an-e-bike-11663702735",
    urlToImage: "https://images.wsj.net/im-625224/social",
    publishedAt: "2022-09-20T19:46:49Z",
    content: "EACH WEEKDAY MORNING, like millions of other American parents, Emily Lecuyer, 39, drops her kids off at daycare.Instead of loading them in a car, however, the CFO for an IT security company in Kansas… [+375 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Kim S. Nash",
    title: "Automation and AI May Be Safe From Tech Budget Cuts, Says Databricks CEO - The Wall Street Journal",
    description: "Tools that identify inefficiencies can help save money in a downturn, said Ali Ghodsi at the WSJ CIO Network conference",
    "url": "https://www.wsj.com/articles/automation-and-ai-may-be-safe-from-tech-budget-cuts-says-databricks-ceo-11663699806",
    urlToImage: "https://images.wsj.net/im-627098/social",
    publishedAt: "2022-09-20T18:50:00Z",
    content: "Automation is one part of the corporate tech budget unlikely to see cuts as companies tighten spending amid an economic downturn, said Databricks Inc. Chief Executive\r\nAli Ghodsi.\r\nTools that chief i… [+2157 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: null,
    title: "Buy Side | If Your Business Spends Big at Amazon, You'll Want This Credit Card - The Wall Street Journal",
    description: "Buy Side | If Your Business Spends Big at Amazon, You'll Want This Credit Card  The Wall Street Journal",
    "url": "https://www.wsj.com/buyside/personal-finance/amazon-business-prime-american-express-credit-card-review-01663695928",
    urlToImage: "https://images.wsjcommerce.net/im-611814?width=1200&height=630",
    publishedAt: "2022-09-20T17:56:00Z",
    content: "If shopping with Amazon is a way of life for your businessthe way it seems to be for many American consumersthis card likely deserves a place in your wallet. The cards base 1% cash back rate is nothi… [+5089 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Mike Colias",
    title: "Hertz to Buy Up to 175,000 EVs From GM",
    description: "The move reflects growing demand from rental-car companies for green vehicles that can appeal to both customers and investors.",
    "url": "https://www.wsj.com/articles/hertz-to-buy-up-to-175-000-evs-from-gm-11663692337",
    urlToImage: "https://images.wsj.net/im-627042/social",
    publishedAt: "2022-09-20T17:21:47Z",
    content: "Hertz Global Holdings has agreed to buy up to 175,000 electric vehicles from General Motors over five years, the latest example of rental companies bulking up on EVs.\r\nThe companies said Tuesday that… [+195 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Suzanne Kapner",
    title: "Gap Is Cutting 500 Corporate Jobs",
    description: "Gap is eliminating about 5% of headquarters staff as it moves to reduce expenses amid declining sales and profits.",
    "url": "https://www.wsj.com/articles/gap-is-cutting-500-corporate-jobs-11663685456",
    urlToImage: "https://images.wsj.net/im-626292/social",
    publishedAt: "2022-09-20T16:01:47Z",
    content: "Gap is eliminating about 500 corporate jobs, according to people familiar with the matter, moving to reduce expenses at the apparel retailer \r\namid declining sales and profits.The jobs are mainly at … [+278 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jesse Newman",
    title: "Beyond Meat Executive Arrested After Allegedly Biting Person’s Nose in Fight",
    description: "The plant-based meat company had hired Doug Ramsey, a former Tyson Foods executive, to help expand Beyond Meat’s operations.",
    "url": "https://www.wsj.com/articles/beyond-meat-executive-arrested-after-allegedly-biting-persons-nose-in-fight-11663689283",
    urlToImage: "https://images.wsj.net/im-626849/social",
    publishedAt: "2022-09-20T15:58:09Z",
    content: "Beyond Meat chief operating officer was arrested in Arkansas over the weekend, after a physical altercation in which he allegedly bit a persons nose and threatened to kill him.\r\nDoug Ramsey, 53, of F… [+234 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Brianna Abbott",
    title: "Most Adults Should Be Screened for Anxiety, U.S. Panel Recommends",
    description: "Adults under the age of 65 should be screened for anxiety disorders and all adults should be checked for depression, a government-backed panel said.",
    "url": "https://www.wsj.com/articles/most-adults-should-be-screened-for-anxiety-u-s-panel-recommends-11663686000",
    urlToImage: "https://images.wsj.net/im-626411/social",
    publishedAt: "2022-09-20T15:00:00Z",
    content: "Adults under the age of 65 should be screened for anxiety disorders and all adults should be checked for depression, a government-backed panel said, as many Americans report symptoms of these mental-… [+349 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "James Marson| Photographs by Emanuele Satolli for The Wall Street Journal",
    title: "The Ragtag Army That Won Battle of Kyiv and Saved Country...",
    description: "The Ragtag Army That Won Battle of Kyiv and Saved Country...\r\n\n \n \n \n (Third column, 7th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Russia unfurls plan to formally annex swathes of Ukraine...\r\nPutin Accused of Sending Serial Killers, Cannibal to Fight War...",
    "url": "https://www.wsj.com/articles/russian-invasion-ukraine-battle-of-kyiv-ragtag-army-11663683336",
    urlToImage: "https://images.wsj.net/im-626535/social",
    publishedAt: "2022-09-20T14:55:38Z",
    content: "KYIVOutside the Giraffe shopping mall on the western edge of Ukraines capital, a group of locals prepared to meet the Russian armored column thundering their way.\r\nIt was late February, and the Russi… [+181 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nicholas Bariyo",
    title: "Outbreak of Rare Ebola Strain Declared in Uganda...",
    description: "Outbreak of Rare Ebola Strain Declared in Uganda...\r\n\n \n \n \n (Second column, 12th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    "url": "https://www.wsj.com/articles/outbreak-of-rare-ebola-strain-declared-in-uganda-11663679223",
    urlToImage: "https://images.wsj.net/im-626776/social",
    publishedAt: "2022-09-20T14:55:38Z",
    content: "KAMPALA, UgandaUganda declared an outbreak of a relatively rare strain of the Ebola virus on Tuesday, raising concerns of a wider spread because existing vaccines havent yet been tested against this … [+204 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Anne Steele",
    title: "Spotify Offers Audiobook Service With 300,000 Titles",
    description: "Users will be able to purchase and listen to a catalog of more than 300,000 audiobooks from independent authors and major publishers on a pay-per-download basis.",
    "url": "https://www.wsj.com/articles/spotify-offers-audiobook-service-with-300-000-titles-11663674852",
    urlToImage: "https://images.wsj.net/im-626436/social",
    publishedAt: "2022-09-20T13:12:47Z",
    content: "Spotify Technology SA said it will offer audiobooks starting Tuesday as the streaming giant aims to expand beyond music and podcasts.\r\nSpotify users will be able to purchase and listen to a catalog o… [+187 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Matthew Luxmoore and Mauro Orru",
    title: "Russia Moves to Annex Occupied Lands as Ukraine Presses Offensive - The Wall Street Journal",
    description: "<ol><li>Russia Moves to Annex Occupied Lands as Ukraine Presses Offensive  The Wall Street Journal\r\n</li><li>Russia triggers plan to formally annex occupied Ukrainian regions  Reuters\r\n</li><li>Kyiv alleges 'terrorism' after rocket hits near second nuclear po…",
    "url": "https://www.wsj.com/articles/russia-moves-to-tighten-grip-on-occupied-lands-as-ukraine-presses-offensive-11663675647",
    urlToImage: "https://images.wsj.net/im-626709/social",
    publishedAt: "2022-09-20T13:10:00Z",
    content: "Officials in Russian-occupied parts of Ukraine announced plans for Russia to annex four regions in the countrys east and south, while Moscow moved to clear the way for a broader mobilization and thre… [+425 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Chavie Lieber",
    title: "Underwire and Push-Up Bra Sales Signal 'Return to Sexy'...",
    description: "Underwire and Push-Up Bra Sales Signal 'Return to Sexy'...\r\n\n \n \n \n (First column, 16th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    "url": "https://www.wsj.com/articles/underwire-push-up-bras-skims-victorias-secret-11663634819",
    urlToImage: "https://images.wsj.net/im-626433/social",
    publishedAt: "2022-09-20T12:37:38Z",
    content: "The pandemic dealt a blow to the underwire bra, as women working from home traded structured and restrictive undergarments for lacy bralettes, stretchy sports bras or nothing at all. \r\nBut todays mar… [+256 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Dieter Holger",
    title: "Salesforce Enters the Carbon-Credit Business - The Wall Street Journal",
    description: "Software provider will compete with various trading platforms and plans to sell to its existing network of clients",
    "url": "https://www.wsj.com/articles/salesforce-enters-the-carbon-credit-business-11663675202",
    urlToImage: "https://images.wsj.net/im-626729/social",
    publishedAt: "2022-09-20T12:00:00Z",
    content: "Business-software provider Salesforce Inc. is launching a marketplace for carbon credits that it says will tackle transparency and quality issues in the fast-growing field.\r\nThe San Francisco-based c… [+265 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Patrick Thomas",
    title: "Food Supply Stays Tight as Disappointing U.S. Harvest Adds to Global Challenges",
    description: "Agriculture executives say that at least two years of bumper crops are needed to relieve pressure from drought and the war in Ukraine.",
    "url": "https://www.wsj.com/articles/food-supply-stays-tight-as-disappointing-u-s-harvest-adds-to-global-challenges-11663645212",
    urlToImage: "https://images.wsj.net/im-626306/social",
    publishedAt: "2022-09-20T11:21:57Z",
    content: "A lackluster U.S. harvest this year is setting back efforts to relieve a global food supply that has been constrained by Russias war in Ukraine, agriculture-industry executives said.\r\nSenior executiv… [+405 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Ian Lovett",
    title: "Ukraine Forces Take Control of Key River Bank, Extending Advance in East...",
    description: "Ukraine Forces Take Control of Key River Bank, Extending Advance in East...\r\n\n \n \n \n (Third column, 7th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Russian pop star's war criticism stirs vigorous debate...\r\nMissile Strikes 2nd Nuke Site, Increasing Concerns...",
    "url": "https://www.wsj.com/articles/ukraine-forces-take-control-of-key-river-bank-extending-advance-in-east-11663585755",
    urlToImage: "https://images.wsj.net/im-626364/social",
    publishedAt: "2022-09-19T21:52:41Z",
    content: "Ukrainian forces said they now control the eastern bank of the Oskil River in the Kharkiv region, cementing strategic gains as part of a rapid counteroffensive and putting them closer to the Russian-… [+379 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Stephen Nakrosis",
    title: "Ford Warns Parts Shortages Will Lead to Higher-Than-Planned Number of Unfinished Vehicles",
    description: "Ford expects to have about 40,000 to 45,000 such vehicles in inventory at the end of the third quarter.",
    "url": "https://www.wsj.com/articles/ford-warns-parts-shortages-will-lead-to-higher-than-planned-number-of-unfinished-vehicles-11663620521",
    urlToImage: "https://images.wsj.net/im-626456/social",
    publishedAt: "2022-09-19T20:56:00Z",
    content: "Ford Motor Co. said Monday that shortages of certain parts will result in a higher-than-planned number of unfinished vehicles in its inventory.\r\nVehicles on wheels have been built but are still in ne… [+256 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Scott Calvert / Photographs by Ting Shen for The Wall Street Journal",
    title: "Welcome to World's Oddest Pot Party, Thrown By Local Police...",
    description: "Welcome to World's Oddest Pot Party, Thrown By Local Police...\r\n\n \n \n \n (Third column, 15th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    "url": "https://www.wsj.com/articles/welcome-to-the-worlds-oddest-pot-party-thrown-by-the-local-police-11663597103",
    urlToImage: "https://images.wsj.net/im-623468/social",
    publishedAt: "2022-09-19T15:19:41Z",
    content: "MONTGOMERY VILLAGE, Md.It was a pot party with a twist. The cops were hosting.\r\nHave some fun, Montgomery County Police Lt. John OBrien urged the 10 marijuana enthusiasts who had brought joints, blun… [+115 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nick Timiraos",
    title: "Powell Inflation Whisperer: Volcker...",
    description: "Powell Inflation Whisperer: Volcker...\r\n\n \n \n \n (Second column, 7th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Warnings Signs Multiply Ahead of Pivotal Fed Meeting...\r\n10-year yield jumps to 3.5%....\r\nTurning point for crypto? Where bitcoin goes from here...",
    "url": "https://www.wsj.com/articles/jerome-powell-inflation-volcker-fed-11663595217",
    urlToImage: "https://images.wsj.net/im-625804/social",
    publishedAt: "2022-09-19T15:19:40Z",
    content: "The Federal Reserves annual August retreat in Jackson Hole, Wyo., was imminent, and \r\nmarkets were rallying on expectations the central bank might slow its pace of interest rate increases.Fed officia… [+401 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Sabela Ojea",
    title: "Take-Two Says Hackers Downloaded ‘Grand Theft Auto’ Footage",
    description: "The videogame company said an unauthorized third party broke into the networks of its Rockstar Games unit and downloaded confidential information from its systems. The company’s shares fell.",
    "url": "https://www.wsj.com/articles/take-two-says-hackers-downloaded-grand-theft-auto-footage-11663596740",
    urlToImage: "https://images.wsj.net/im-626105/social",
    publishedAt: "2022-09-19T14:12:00Z",
    content: "Take-Two Interactive Software said hackers broke into the networks of its Rockstar Games Inc. unit and illegally accessed early development footage of the companys next Grand Theft Auto videogame.\r\nT… [+325 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Alyssa Lukpat",
    title: "Wegmans Stops Using Self-Checkout App After Suffering Losses",
    description: "Wegmans was one of many grocery stores that started using self-checkout technology during the pandemic. Experts say the technology makes it easier for shoplifters to sneak through.",
    "url": "https://www.wsj.com/articles/wegmans-stops-using-self-checkout-app-after-suffering-losses-11663593248",
    urlToImage: "https://images.wsj.net/im-625994/social",
    publishedAt: "2022-09-19T13:25:49Z",
    content: "Wegmans, the East Coast supermarket chain, said Monday that it would stop using its self-checkout app until the system could be improved because its stores were experiencing losses.\r\nThe chain, which… [+232 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nicole Friedman and Will Parker",
    title: "In Slowing Housing Market, Sellers Ask: Why List When Can Collect Rent?",
    description: "Higher mortgage-interest rates have reduced home-buying demand, while rents for single family-homes have soared in recent years.",
    "url": "https://www.wsj.com/articles/in-a-slowing-housing-market-sellers-ask-why-list-a-home-when-you-can-collect-rent-11663585203",
    urlToImage: "https://images.wsj.net/im-624046/social",
    publishedAt: "2022-09-19T12:04:40Z",
    content: "After Mark and Melissa Reichert moved from California to Dallas, the couple put their home in the Los Angeles suburbs up for sale this summer. Yet even after they cut the asking price by $10,000, the… [+273 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Alexa Corse",
    title: "Election Skeptics Deploy as Poll Watchers...",
    description: "Election Skeptics Deploy as Poll Watchers...\r\n\n \n \n \n (First column, 13th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:MAGA GIVES THE FINGER: Strange Salute Sets Off Confusion at Ohio Trump Rally...\r\n8 Minute Monologue With Melodramatic Music...\r\nQAnon 'Storm' T…",
    "url": "https://www.wsj.com/articles/in-wisconsin-election-skeptics-deploy-as-poll-watchers-for-midterms-11663579802",
    urlToImage: "https://images.wsj.net/im-625617/social",
    publishedAt: "2022-09-19T12:04:39Z",
    content: "GREEN BAY, Wis.Republicans here are recruiting a fresh batch of poll watchers to monitor voting in November as part of a revamped response to allegations of election fraud that \r\nroiled the latest pr… [+509 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Matt Wirz",
    title: "Meme-Stock Traders Embrace Avaya Despite Wall Street Fears",
    description: "Online traders follow activist investor ‘The King’ and drive big gains in the company’s shares, which had fallen to 65 cents.",
    "url": "https://www.wsj.com/articles/meme-stock-traders-embrace-avaya-despite-wall-street-fears-11663540636",
    urlToImage: "https://images.wsj.net/im-625074/social",
    publishedAt: "2022-09-19T12:00:00Z",
    content: "Individual investors are backing a new underdog, Avaya Holdings pumping up the software companys downtrodden stock by about 200% over the past month and confounding Wall Street professionals.\r\nAvayas… [+322 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Spencer Jakab",
    title: "How to Survive the Next Market Crash",
    description: "Fund manager Mark Spitznagel, who earned a fortune when stocks cratered in 2008 and 2020, has some surprising advice for how ordinary investors can brace for the next big one.",
    "url": "https://www.wsj.com/articles/how-to-survive-the-next-market-crash-11663558727",
    urlToImage: "https://images.wsj.net/im-625654/social",
    publishedAt: "2022-09-19T11:00:00Z",
    content: "Jerome Powell and the Federal Reserve might be in the process of driving the stock market over a cliff by \r\ntightening into a recession.That is one potential scenario envisioned by fund manager Mark … [+580 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nina Trentmann",
    title: "Delta Looks to Improve Margins, Cut Debt as Travel Rebounds",
    description: "CFO Dan Janki, who joined the airline last year after about three decades at GE, is also allocating funds for inventory and time buffers",
    "url": "https://www.wsj.com/articles/delta-looks-to-improve-margins-cut-debt-as-travel-rebounds-11663579801",
    urlToImage: "https://images.wsj.net/im-624123/social",
    publishedAt: "2022-09-19T09:30:00Z",
    content: "Dan Janki,\r\nthe finance chief of\r\nDelta Air Lines Inc.,\r\nhad to navigate a host of pressures in his first year in the airline industry as travel demand remained below the levels seen before the Covid… [+7967 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Mike Cherney",
    title: "Mexicans Can Cross U.S. Border to Get Paid for Plasma, Court Rules",
    description: "Pharmaceutical companies sued to lift border-agency ban on practice that accounts for up to 10% of national plasma supply.",
    "url": "https://www.wsj.com/articles/mexicans-can-cross-u-s-border-to-get-paid-for-plasma-court-rules-11663570318",
    urlToImage: "https://images.wsj.net/im-625828/social",
    publishedAt: "2022-09-19T06:56:53Z",
    content: "SYDNEYPharmaceutical companies scored a legal victory that will again allow them to pay people who cross the border from Mexico for their blood plasma, giving a boost to U.S. supply of a \r\ncritical i… [+448 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Alex Beam",
    title: "‘When Eero Met His Match’ Review: Making Saarinen Soar",
    description: "How Aline Louchheim Saarinen’s media insights lifted her husband’s jet-age architecture.",
    "url": "https://www.wsj.com/articles/when-eero-met-his-match-book-review-making-saarinen-soar-11663339420",
    urlToImage: "https://images.wsj.net/im-624438/social",
    publishedAt: "2022-09-19T04:12:45Z",
    content: "Architecture has only recently come to grips with its long history as a predominantly all-male profession that froze out female practitioners. For example, Robert Venturis 1991 Pritzker Prize award i… [+805 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: null,
    title: "Buy Side | The Best Business Credit Card for 2022 - The Wall Street Journal",
    description: "This card offers hard-to-beat rewards points in a slew of useful bonus categories.",
    "url": "https://www.wsj.com/buyside/personal-finance/americanexpress-business-gold-credit-card-review-01663554089",
    urlToImage: "https://images.wsjcommerce.net/im-611791?width=1200&height=630",
    publishedAt: "2022-09-19T02:29:00Z",
    content: "Key stats:<ul><li>Base rewards: 1x </li><li>Bonus rewards: 4x on up to $150,000 combined spending in the two categories where you spend most each month: airfare bought directly from the airlines; pur… [+7396 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Max Colchester",
    title: "Queen Funeral Plans Were Decades in Making...",
    description: "Queen Funeral Plans Were Decades in Making...\r\n\n \n \n \n (Third column, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:THE MAN WHO WILL BE KING: Prince William Moves Into Spotlight as Heir to Throne...\r\nFor Harry and Meghan, Tensions Linger...\r\nThe open secret o…",
    "url": "https://www.wsj.com/articles/queen-elizabeth-iis-funeral-plans-were-decades-in-the-making-11663526227",
    urlToImage: "https://images.wsj.net/im-625741/social",
    publishedAt: "2022-09-19T02:01:39Z",
    content: "LONDONA few years ago, officials at Buckingham Palace rented out an aircraft hangar to mock up Queen Elizabeth IIs lying in state in Westminster Hall, where they paraded around a replica catafalque w… [+561 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Isabel Coles",
    title: "Russia Expands Attacks on Civilian Targets in Ukraine After Battlefield Losses - The Wall Street Journal",
    description: "<ol><li>Russia Expands Attacks on Civilian Targets in Ukraine After Battlefield Losses  The Wall Street Journal\r\n</li><li>Russia-Ukraine latest: Zelenskyy vows to continue retaking towns  Al Jazeera English\r\n</li><li>Russia widens strikes on Ukrainian civilia…",
    "url": "https://www.wsj.com/articles/russia-expands-attacks-on-civilian-targets-in-ukraine-after-battlefield-losses-11663500963",
    urlToImage: "https://images.wsj.net/im-625682/social",
    publishedAt: "2022-09-18T15:52:00Z",
    content: "Russia is intensifying a campaign of long-range missile strikes targeting Ukraines key infrastructure after \r\nfacing major setbacks on the battlefield that have raised concerns about further escalati… [+378 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Mike Colias",
    title: "Electric Vehicles Took Off. Car Makers Weren’t Ready",
    description: "More buyers are lining up for EVs, catching car companies flat-footed and triggering a race for more batteries, factories and materials. “Can I afford to keep waiting for this?”",
    "url": "https://www.wsj.com/articles/electric-vehicles-inventory-supply-chain-batteries-11663504014",
    urlToImage: "https://images.wsj.net/im-618206/social",
    publishedAt: "2022-09-18T14:04:00Z",
    content: "Auto makers racing to turn out electric vehicles have generated long wait lists. Now they must try not to disappoint customers like Louie Figueroa.\r\nMr. Figueroa put down a $100 refundable deposit on… [+213 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jason Douglas",
    title: "China Factories Accelerate Robotics Push as Workforce Shrinks...",
    description: "Industrial automation climbs as the country tries to extend its global manufacturing dominance despite the labor challenges it is facing.",
    "url": "https://www.wsj.com/articles/chinas-factories-accelerate-robotics-push-as-workforce-shrinks-11663493405",
    urlToImage: "https://images.wsj.net/im-625651/social",
    publishedAt: "2022-09-18T11:13:39Z",
    content: "China installed almost as many robots in its factories last year as the rest of the world, accelerating a rush to automate and consolidate its manufacturing dominance even as its \r\nworking-age popula… [+258 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Heather Haddon",
    title: "With Starbucks CEO Succession Plan in Place, Howard Schultz Plots His Priorities",
    description: "The architect of the coffee chain’s rise, now interim chief, vows to mold a new generation of leaders and improve service.",
    "url": "https://www.wsj.com/articles/with-starbucks-ceo-succession-plan-in-place-howard-schultz-plots-his-priorities-11663448751",
    urlToImage: "https://images.wsj.net/im-625358/social",
    publishedAt: "2022-09-18T11:00:15Z",
    content: "Howard Schultz has a bucket list for his remaining six months as chief executive of Starbucks before exiting for the third andhe has pledged\r\nlast time.Mr. Schultz would like to ensure that the strat… [+257 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "James Mackintosh",
    title: "Energy and Mining Are Making the Stock Market Look Too Good",
    description: "Soaring profits at oil companies and miners are making earnings look better than the reality of the rest of the stock market, and distorting Wall Street’s favorite valuation tool, the ratio of price to forecast earnings.",
    "url": "https://www.wsj.com/articles/energy-and-mining-are-making-the-stock-market-look-too-good-11663465354",
    urlToImage: "https://images.wsj.net/im-625491/social",
    publishedAt: "2022-09-18T11:00:00Z",
    content: "Soaring profits at oil companies and miners are making earnings look better than the reality of the rest of the stock market, and distorting Wall Streets favorite valuation tool, the ratio of price t… [+310 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Katherine Blunt",
    title: "Electric Bills Soar Across the Country as Winter Looms",
    description: "Rising natural-gas prices amid short supplies are expected to make it more expensive to light and heat homes in the coming months.",
    "url": "https://www.wsj.com/articles/electric-bills-soar-across-the-country-as-winter-looms-11663493404",
    urlToImage: "https://images.wsj.net/im-624336/social",
    publishedAt: "2022-09-18T10:18:38Z",
    content: "U.S. utility customers, faced with some of their largest bills in years, are set to pay even more this winter as \r\nnatural-gas prices continue to climb.Natural-gas prices have more than doubled this … [+339 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Max Colchester in London and Erich Schwartzel in Los Angeles",
    title: "For Harry and Meghan, Tensions Linger...",
    description: "For Harry and Meghan, Tensions Linger...\r\n\n \n \n \n (Third column, 9th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Prince William Moves Into Spotlight as Heir to Throne...\r\nCamilla wins praise for first week in Consort role...\r\nBeckham wipes tears at Queen viewin…",
    "url": "https://www.wsj.com/articles/for-prince-harry-and-meghan-tensions-linger-in-royal-family-after-queens-death-11663430470",
    urlToImage: "https://images.wsj.net/im-625590/social",
    publishedAt: "2022-09-17T17:16:39Z",
    content: "Earlier this week, Prince Harry and Meghan Markle, Duke and Duchess of Sussex, were invited to a dinner to be held Sunday at Buckingham Palace for heads of state visiting for Queen Elizabeth IIs fune… [+312 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Peter Loftus",
    title: "Abbott Faces Competition From Heart Valve Device Cleared by FDA",
    description: "A system from Edwards Lifesciences that has been cleared by the Food and Drug Administration gives patients an alternative after years of a single company dominating the market.",
    "url": "https://www.wsj.com/articles/abbott-faces-competition-from-heart-valve-device-cleared-by-fda-11663428601",
    urlToImage: "https://images.wsj.net/im-625274/social",
    publishedAt: "2022-09-17T15:32:26Z",
    content: "A new heart valve repair device from Edwards Lifesciences Corp. was as effective as the market-leading device from Abbott Laboratories in a clinical study of heart-disease patients, a finding likely … [+371 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "wsj",
    title: "Alcohol-Free Saudi Arabia Plans Champagne and Wine Bars at Neom...",
    description: "Saudi Arabia’s futuristic megaproject Neom is planning to serve wine, cocktails and champagne at a beach resort, in what would be a first for a conservative kingdom where alcohol is banned.",
    "url": "https://www.wsj.com/articles/alcohol-free-saudi-arabia-plans-champagne-and-wine-bars-at-neom-11663421529",
    urlToImage: "https://images.wsj.net/im-625573/social",
    publishedAt: "2022-09-17T14:00:08Z",
    content: "WSJ News Exclusive | Alcohol-Free Saudi Arabia Plans Champagne and Wine Bars at NeomListen to article(2 minutes)RIYADH, Saudi Arabia—Saudi Arabia’s futuristic megaproject Neom is planning to serve wi… [+1051 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Jess Bravin",
    title: "Biden Quietly Steps Up Effort to Close Gitmo...",
    description: "The Biden administration is appointing a senior diplomat to oversee detainee transfers and signaling it won’t interfere with plea negotiations that could resolve a long-stalled prosecution.",
    "url": "https://www.wsj.com/articles/biden-administration-quietly-steps-up-effort-to-close-guantanamo-11663412402",
    urlToImage: "https://images.wsj.net/im-620867/social",
    publishedAt: "2022-09-17T13:43:39Z",
    content: "WASHINGTONThe Biden administration is revamping its effort to close the Guantanamo Bay prison, for the first time appointing a senior diplomat to oversee detainee transfers and signaling it wont inte… [+389 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "David S. Cloud and Aresu Eqbali",
    title: "Iran Supreme Leader Emerges in Public Amid Health Speculation...",
    description: "Photos and videos published by Iranian media showed the conservative cleric at a religious ceremony with university students.",
    "url": "https://www.wsj.com/articles/irans-supreme-leader-ali-khamenei-emerges-in-public-amid-health-speculation-11663414072",
    urlToImage: "https://images.wsj.net/im-625574/social",
    publishedAt: "2022-09-17T13:43:39Z",
    content: "TEHRANIranian media on Saturday published photographs and video of Supreme Leader Ayatollah Ali Khamenei attending a religious ceremony in Tehran, amid speculation about the octogenarians health amon… [+486 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Neil deGrasse Tyson",
    title: "The Power of Cosmic Perspective...",
    description: "The way we think about human fate and responsibility has always been bound up with our understanding of the heavens.",
    "url": "https://www.wsj.com/articles/the-power-of-a-cosmic-perspective-11663387261",
    urlToImage: "https://images.wsj.net/im-622861/social",
    publishedAt: "2022-09-17T13:43:39Z",
    content: "Every few years, the moon passes exactly between Earth and the sun, precisely covering its luminous surface, darkening the sky and briefly laying bare the suns gorgeous outer atmosphere called the co… [+1071 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Aaron Zitner and Julie Wernau",
    title: "Fetterman, Facing Health Questions, Boosts Public Schedule...",
    description: "The Pennsylvania lieutenant governor and Democratic nominee for U.S. Senate is presenting himself more often to voters as he tries to show that he retains the ability to serve effectively.",
    "url": "https://www.wsj.com/articles/fetterman-facing-health-questions-boosts-public-schedule-in-pennsylvania-senate-bid-11663418351",
    urlToImage: "https://images.wsj.net/im-624246/social",
    publishedAt: "2022-09-17T13:43:37Z",
    content: "Four months after a life-threatening stroke took him off the campaign trail, John Fetterman, the lieutenant governor of Pennsylvania and Democratic nominee for U.S. Senate, is presenting himself more… [+461 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Miriam Gottfried",
    title: "Who Will Inherit the Family Business? Often, It's Private Equity - The Wall Street Journal",
    description: "The industry that made its name taking private big corporations has shifted its focus to smaller targets,  some of which have been family-owned for several generations.",
    "url": "https://www.wsj.com/articles/who-will-inherit-the-family-business-often-its-private-equity-11663362421",
    urlToImage: "https://images.wsj.net/im-624214/social",
    publishedAt: "2022-09-17T13:00:00Z",
    content: "Neal Rosenthal found a different kind of heir when he set out to craft a succession plan for his wine-importing business a few years ago.\r\nMr. Rosenthal wasnt ready to give up the company he started … [+246 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Yaroslav Trofimov and Dion Nissenbaum",
    title: "Russia's Use of Iranian Kamikaze Drones Creates New Dangers for Ukrainian Troops - WSJ - The Wall Street Journal",
    description: "Shahed-136 drones supplied to Russia carried out several devastating strikes in Ukraine’s Kharkiv region over the past week, Ukrainian commanders say.",
    "url": "https://www.wsj.com/articles/russias-use-of-iranian-kamikaze-drones-creates-new-dangers-for-ukrainian-troops-11663415140",
    urlToImage: "https://images.wsj.net/im-625447/social",
    publishedAt: "2022-09-17T12:51:00Z",
    content: "Russia has inflicted serious damage on Ukrainian forces with recently introduced \r\nIranian drones, in its first wide-scale deployment of a foreign weapons system since the war began, Ukrainian comman… [+299 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: null,
    title: "24 Hours in the Queue to View Queen Elizabeth II's Coffin - The Wall Street Journal",
    description: "<ol><li>24 Hours in the Queue to View Queen Elizabeth II's Coffin  The Wall Street Journal\r\n</li><li>New Yorkers living in London on response to Queen Elizabeth II's death  CBS New York\r\n</li><li>The queen's queue: A portrait of our times  Reuters UK\r\n</li><l…",
    "url": "https://www.wsj.com/story/24-hours-in-the-queue-to-view-queen-elizabeth-ii-a3c29f5a",
    urlToImage: "https://images.wsj.net/im-624403",
    publishedAt: "2022-09-17T10:19:21Z",
    content: "David Xue, Fred Li, Wendy Tan, Macy Ma and Zihan Zhang\r\nAll studied together in London\r\nEverybody is here to celebrate, said Mr. Li. However, they all seem to ignore the damage that the British Empir… [+115 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Christopher Mims",
    title: "More Bosses Are Spying on Quiet Quitters. It Could Backfire.",
    description: "The tools companies use to monitor their employees can fall short of their promises, and even be counterproductive.",
    "url": "https://www.wsj.com/articles/more-bosses-are-spying-on-quiet-quitters-it-could-backfire-11663387216",
    urlToImage: "https://images.wsj.net/im-624151/social",
    publishedAt: "2022-09-17T04:39:18Z",
    content: "In the battle against \r\nquiet quitting and other obstacles to productivity in the workplace, companies are increasingly turning to an array of sophisticated tools to watch and analyze how employees d… [+708 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Sean Mclain",
    title: "The Man from Rivian Who Wants to Change How We Buy Cars",
    description: "Only automobile dealerships can sell you a car in many states. Electric-vehicle upstart Rivian wants that to end, and it’s Jim Chen’s job to make that happen. It won’t be easy.",
    "url": "https://www.wsj.com/articles/the-man-from-rivian-who-wants-to-change-how-we-buy-cars-11663387409",
    urlToImage: "https://images.wsj.net/im-625030/social",
    publishedAt: "2022-09-17T04:07:26Z",
    content: "Jim Chen, the chief lobbyist for Rivian Automotive Inc., one of the most ambitious electric-vehicle startups, wants to change how people buy cars and trucks. He had some success making that happen la… [+611 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Laura Kusisto",
    title: "State Abortion Bans Face Religious-Liberty Lawsuits -- From the Left...",
    description: "State Abortion Bans Face Religious-Liberty Lawsuits -- From the Left...\r\n\n \n \n \n (Third column, 2nd story, link)",
    "url": "https://www.wsj.com/articles/state-abortion-bans-face-religious-liberty-lawsuits-from-the-left-11663343259",
    urlToImage: "https://images.wsj.net/im-624172/social",
    publishedAt: "2022-09-17T02:52:39Z",
    content: "As bans on abortion take effect in a number of states, faith leaders with liberal views on the issue are taking a page out of \r\nthe conservative legal playbook, arguing in new lawsuits that the restr… [+408 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Georgi Kantchev, Bojan Pancevski and Joe Wallace",
    title: "Germany Takes Control of Oil Refineries Owned by Russia’s Rosneft",
    description: "Berlin, racing to safeguard its energy supplies before its planned ban on Russian oil imports kicks in later this year, said it would place Rosneft’s German subsidiaries under trusteeship.",
    "url": "https://www.wsj.com/articles/germany-takes-control-of-oil-refineries-owned-by-russias-rosneft-11663315592",
    urlToImage: "https://images.wsj.net/im-624627/social",
    publishedAt: "2022-09-16T18:38:00Z",
    content: "BERLINGermany took control of the German business of Russian oil giant Rosneft Oil Co. as Berlin races \r\nto safeguard its energy supplies before its planned ban on Russian oil imports kicks in later … [+434 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Cameron McWhirter / Photographs by Emily Kask for The Wall Street Journal",
    title: "New Orleans Has America's No. 1 Murder Rate...",
    description: "New Orleans Has America's No. 1 Murder Rate...\r\n\n \n \n \n (Second column, 4th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    "url": "https://www.wsj.com/articles/new-orleans-murder-rate-crime-11663338008",
    urlToImage: "https://images.wsj.net/im-621826/social",
    publishedAt: "2022-09-16T15:28:37Z",
    content: "Violent crime in New Orleans has grown to the point that Ibrahim Rabee no longer feels safe at his auto shop.\r\nAt least seven people have been killed within blocks of his store since the beginning of… [+369 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Megha Mandavia",
    title: "India's Education Tech Giant Struggles With Math - The Wall Street Journal",
    description: "Byju’s disappointing results are bound to raise further questions about the heady valuations of some Indian startups—and the rush to invest that characterized the deal boom of 2020 and 2021.",
    "url": "https://www.wsj.com/articles/indias-education-tech-giant-struggles-with-math-11663340978",
    urlToImage: "https://images.wsj.net/im-624832/social",
    publishedAt: "2022-09-16T15:10:00Z",
    content: "Private-equity and venture-capital investors in Byjus, Indias most valuable startup, caught a break this weekthe company isnt listed yet. If it had been, gyrating markets seem very likely to have cau… [+399 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Joseph Walker",
    title: "Crispr Gene-Editing Drugs Show Promise in Preliminary Study",
    description: "Intellia Therapeutics said two of its experimental Crispr treatments produced positive results in early-stage trials.",
    "url": "https://www.wsj.com/articles/crispr-gene-editing-drugs-show-promise-in-preliminary-study-11663327063",
    urlToImage: "https://images.wsj.net/im-624113/social",
    publishedAt: "2022-09-16T11:21:03Z",
    content: "Intellia Therapeutics Inc. reported encouraging early-stage study results for its Crispr gene-editing treatments, the latest sign that \r\nthe pathbreaking technology could result in commercially avail… [+266 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Rob Copeland",
    title: "The Ivy League Dropout Who Just Sold His Firm to Adobe for $20 Billion",
    description: "Dylan Field, the 30-year-old co-founder of Figma, has turned a high-school interest in robotics into a colossal deal payday with the tech giant Adobe.",
    "url": "https://www.wsj.com/articles/the-ivy-league-dropout-who-just-sold-his-firm-to-adobe-for-20-billion-11663320640",
    urlToImage: "https://images.wsj.net/im-623997/social",
    publishedAt: "2022-09-16T09:58:21Z",
    content: "Four years ago, Dylan Field was living in a one-bedroom apartment in San Franciscos gritty Mission District, where he would stop for a $1 cup of coffee on his way to work.\r\nThe college dropout was an… [+175 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "wsj",
    title: "Peter Thiel, Losing Arizona...",
    description: "He and Donald Trump helped Blake Masters get the nomination. Where are they now?",
    "url": "https://www.wsj.com/articles/peter-thiel-losing-arizona-blake-masters-funding-gop-super-pac-inflation-power-voters-republicans-filibuster-11663280414",
    urlToImage: "https://images.wsj.net/im-624388/social",
    publishedAt: "2022-09-16T02:00:03Z",
    content: "Opinion | Peter Thiel, Losing ArizonaListen to article(3 minutes)If Republicans lose a tantalizingly close Arizona Senate race, don’t place the blame entirely at the feet of nominee Blake Masters. Lo… [+1064 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "The Wall Street Journal",
    title: "Pop Music’s Tension Between New And Familiar",
    description: "The longevity of old songs is an even greater mystery when what every era’s fans want is the fresh, the startling, the new. – The Wall Street Journal",
    "url": "https://www.wsj.com/articles/lets-do-it-book-review-history-pop-music-hit-parade-11662733576",
    urlToImage: "https://images.wsj.net/im-619041/social",
    publishedAt: "2022-09-15T22:01:00Z",
    content: "At a poetry festival in Dublin a few years ago, I found myself in a group of mostly middle-aged folks from all over the English-speaking world. Out of nowhere, someone began to sing Its a Long Way to… [+1151 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Meghan Bobrowsky",
    title: "California Gov. Gavin Newsom Signs Law Requiring Social Media Companies to Consider Children’s Health",
    description: "California Gov. Gavin Newsom Signs Law Requiring Social Media Companies to Consider Children’s Healthwsj.com",
    "url": "https://www.wsj.com/articles/california-gov-gavin-newsom-signs-law-requiring-social-media-companies-to-consider-childrens-health-11663277455",
    urlToImage: "https://images.wsj.net/im-624234/social",
    publishedAt: "2022-09-15T21:36:51Z",
    content: "Social-media companies that operate in California will have to consider the health and well-being of children under \r\na first-of-its-kind bill signed into law Thursday by Gov. Gavin Newsom.Called the… [+292 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Alyssa Lukpat",
    title: "Dems Scrambling...",
    description: "Dems Scrambling...\r\n\n \n \n \n (Third column, 5th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Hispanics pass whites to become largest group in Texas...\r\nAbbott sends busloads of migrants outside Kamala home...\r\nNew York relocates arrivals -- to Florida!\r\nDeSantis …",
    "url": "https://www.wsj.com/articles/florida-sends-50-migrants-on-planes-to-marthas-vineyard-11663253106",
    urlToImage: "https://images.wsj.net/im-623712/social",
    publishedAt: "2022-09-15T21:19:40Z",
    content: "An accelerating campaign by Republican governors to send migrants to Democratic strongholds, initially seen by many Democratic officials as a political stunt, is now sending those officials scramblin… [+353 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Aylin Woodward",
    title: "Saturn Ring Mystery Possibly Solved After Four Centuries of Uncertainty - The Wall Street Journal",
    description: "<ol><li>Saturn Ring Mystery Possibly Solved After Four Centuries of Uncertainty  The Wall Street Journal\r\n</li><li>Saturn's Missing Moon Might Be Hiding In Its Rings, Scientists Suggest  CNET\r\n</li><li>Saturn's rings could have come from a destroyed moon name…",
    "url": "https://www.wsj.com/articles/saturn-ring-mystery-possibly-solved-after-four-centuries-of-uncertainty-11663264812",
    urlToImage: "https://images.wsj.net/im-621451/social",
    publishedAt: "2022-09-15T18:00:00Z",
    content: "Saturn isnt the only ringed planet in our solar system, but its iconic girdle of ice and dust is by far the most spectacular. And a new study gives a fresh explanation of how and when Saturns rings f… [+614 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Ken Thomas, Esther Fung and David Harrison",
    title: "U.S. Railroad Strike Averted as Tentative Deal Is Reached, Biden Says - The Wall Street Journal",
    description: "<ol><li>U.S. Railroad Strike Averted as Tentative Deal Is Reached, Biden Says  The Wall Street Journal\r\n</li><li>Biden announces \"tentative agreement\" to avert national rail strike  CBS Mornings\r\n</li><li>Railroad strike averted after marathon talks reach ten…",
    "url": "https://www.wsj.com/articles/u-s-railroad-strike-averted-as-white-house-unions-reach-tentative-deal-11663234424",
    urlToImage: "https://images.wsj.net/im-623705/social",
    publishedAt: "2022-09-15T17:20:00Z",
    content: "WASHINGTONThe biggest freight railroads and union leaders reached a tentative labor agreement to avert a nationwide strike that \r\nwould have crippled swatches of the U.S. economy.President Biden and … [+349 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Ben Eisen",
    title: "Mortgage Rates Top 6% for the First Time Since the 2008 Financial Crisis - The Wall Street Journal",
    description: "<ol><li>Mortgage Rates Top 6% for the First Time Since the 2008 Financial Crisis  The Wall Street Journal\r\n</li><li>Mortgage rates top 6% for the first time since 2008  CNN\r\n</li><li>Housing: Mortgage rates breach 6% for first time since 2008  Yahoo Finance\r\n…",
    "url": "https://www.wsj.com/articles/mortgage-rates-hit-6-02-highest-since-the-financial-crisis-11663250402",
    urlToImage: "https://images.wsj.net/im-623419/social",
    publishedAt: "2022-09-15T15:34:00Z",
    content: "Mortgage rates topped 6% this week, their highest level since 2008, giving a jolt to home buyers who last year were paying less than half that.\r\nThe average rate on a 30-year fixed mortgage climbed t… [+281 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Alexandra Samuel",
    title: "How I Am Reducing the Stress of Returning to Business Travel - The Wall Street Journal",
    description: "Social anxiety. Covid worries. Family separation. I’m learning that there are ways to make it all a little bit easier.",
    "url": "https://www.wsj.com/articles/reduce-travel-business-stress-returning-11663180168",
    urlToImage: "https://images.wsj.net/im-621836/social",
    publishedAt: "2022-09-15T14:00:00Z",
    content: "As I loaded my laptop, iPad and toiletries back into my carry-on bag after passing through airport security, the fellow packing up next to me commented on one of my gadgets. Before I knew it, we were… [+645 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Nicole Nguyen",
    title: "Apple Watch Series 8 and SE Review: Both Watches Could Save Your Life. One Could Help You Make a Baby. - The Wall Street Journal",
    description: "<ol><li>Apple Watch Series 8 and SE Review: Both Watches Could Save Your Life. One Could Help You Make a Baby.  The Wall Street Journal\r\n</li><li>Apple Watch Series 8 review: if it ain't broke  The Verge\r\n</li><li>Apple Watch Series 8: A week with the new bes…",
    "url": "https://www.wsj.com/articles/apple-watch-series-8-and-se-review-both-watches-could-save-your-life-one-could-help-you-make-a-baby-11663204609",
    urlToImage: "https://images.wsj.net/im-623743/social",
    publishedAt: "2022-09-15T13:00:00Z",
    content: "Deciding which Apple Watch to get just got a little more complicated. This year, there are \r\nthree new Apple Watch models, each with a different mix of health, fitness and emergency sensors.Theres th… [+398 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Charles Hutzler",
    title: "Biden Orders Deeper Scrutiny of Foreign Investment in Tech and Supply Chains - The Wall Street Journal",
    description: "A new executive order directs the panel screening foreign investment, Cfius, to look at deals in areas U.S. officials say are of interest to China.",
    "url": "https://www.wsj.com/articles/biden-orders-deeper-scrutiny-of-foreign-investment-in-tech-and-supply-chains-11663246802",
    urlToImage: "https://images.wsj.net/im-623509/social",
    publishedAt: "2022-09-15T13:00:00Z",
    content: "WASHINGTONThe Biden administration is ordering a panel that screens foreign investment for national security risks to heighten scrutiny of deals that may give China and other adversaries access to cr… [+412 chars]"
    },
    {
    source: {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal"
    },
    author: "Katherine Clarke",
    title: "Will Someone Pay $250 Million to Live Atop World's Tallest Condo Tower?",
    description: "Will Someone Pay $250 Million to Live Atop World's Tallest Condo Tower?\r\n\n \n \n \n (First column, 13th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Country's Most Expensive Home...",
    "url": "https://www.wsj.com/articles/central-park-tower-penthouse-lists-for-250-million-11663202931",
    urlToImage: "https://images.wsj.net/im-622414/social",
    publishedAt: "2022-09-15T11:34:39Z",
    content: "When construction topped out at New Yorks Central Park Tower, the Billionaires Row mega-tower set a record for the worlds tallest residential condominium, at 1,550 feet high. Now, \r\ndeveloper Gary Ba… [+406 chars]"
    }
    ]
    

  
  constructor() {
      super();
      this.state ={
        articles: [],
        loading: false,
      };
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=41d92bb277954d049a3b68e1ba8c1522";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className="container my-4">
        <h2>Top Headline</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 45):""}
                  description={element.description?element.description.slice(0, 88):""}
                  urlToImage={element.urlToImage}
                  newsUrl ={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  }

}
  
    


export default News