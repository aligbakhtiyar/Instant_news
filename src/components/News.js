import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Aisha Malik",
      title:
        "Snapchat rolls out iOS 16 Lock Screen widgets with latest app update",
      description:
        "Snapchat is the latest popular app to roll out iOS 16 Lock Screen widgets for its iPhone users. One of the major changes with Apple’s iOS 16 launch is the option to personalize your Lock Screen with widgets. Many companies have worked to make their apps iOS 1…",
      url: "https://techcrunch.com/2022/09/15/snapchat-ios-16-lock-screen-widgets/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/snapchat-lock-screen-widgets.png?resize=1200,675",
      publishedAt: "2022-09-15T15:08:54Z",
      content:
        "Snapchat is the latest popular app to roll out iOS 16 Lock Screen widgets for its iPhone users. One of the major changes with Apples iOS 16 launch is the option to personalize your Lock Screen with w… [+2852 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Jordan Crook",
      title:
        "Watch Activision unveil the next generation of Call of Duty right here",
      description:
        "First look at live Call of Duty: Modern Wafare II and Warzone II gameplay",
      url: "https://techcrunch.com/2022/09/15/cod-modern-warfare-ii-mwii-live-gameplay-cod-next/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/modernwarfareii.jpg?resize=1200,675",
      publishedAt: "2022-09-15T14:22:32Z",
      content:
        "Call of Duty is one of the biggest franchises in the world of gaming, and we’re just a few short weeks from the debut of the next title. Welcome to the era of Modern Warfare II. \r\nToday at CoD Next, … [+751 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Rita Liao",
      title: "Miners flee to Ethereum Classic as 'the Merge' arrives",
      description:
        "The Merge, the long-awaited software upgrade that promises to make Ethereum transactions a lot greener, is expected to put miners out of jobs. But miners are not quitting outright. With big bucks invested in computing hardware, many of them are seeking refuge…",
      url: "https://techcrunch.com/2022/09/15/miners-ethereum-classic-the-merge/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2018/09/bitmain.jpg?resize=1200,640",
      publishedAt: "2022-09-15T14:18:59Z",
      content:
        "The Merge, the long-awaited software upgrade that promises to make Ethereum transactions a lot greener, is expected to put miners out of jobs. But miners are not quitting outright. With big bucks inv… [+2776 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Natasha Lomas",
      title: "Game on for UK's deeper antitrust probe of Microsoft-Activision",
      description:
        "The UK’s competition watchdog has confirmed it will move to an in-depth investigation of the Microsoft-Activision $68.7BN gaming mega-deal, a couple of weeks after it signalled concerns about the proposed acquisition. Earlier this month, the Competition and M…",
      url: "https://techcrunch.com/2022/09/15/microsoft-activision-uk-antitrust-probe/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/01/MicrosoftGaming118_1920x1080.webp?resize=1200,675",
      publishedAt: "2022-09-15T14:06:15Z",
      content:
        "The UK’s competition watchdog has confirmed it will move to an in-depth investigation of the Microsoft-Activision $68.7BN gaming mega-deal, a couple of weeks after it signalled concerns about the pro… [+1331 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Amanda Silberling",
      title: "TikTok just launched a BeReal clone called TikTok Now",
      description:
        "All the major social media players are racing to rip-off BeReal, a small, buzzy French app.",
      url: "https://techcrunch.com/2022/09/15/tiktok-just-launched-a-bereal-clone-called-tiktok-now/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/tiktoknow.jpg?resize=1200,777",
      publishedAt: "2022-09-15T14:05:46Z",
      content:
        "TikTok launched a new feature today that is basically just a copy of BeReal, the buzzy French social app that’s been steadily gaining popularity. BeReal invites users to take a front and back camera … [+2715 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ingrid Lunden",
      title:
        "Adobe snaps up Figma for $20B, taking out one of its biggest rivals in digital design",
      description:
        "Big news in the world of digital creative technology: Adobe today announced that it would acquire Figma for $20 billion, taking out one of its biggest rivals in the realm of digital design. Both the WSJ and Bloomberg reported earlier this morning that Adobe w…",
      url: "https://techcrunch.com/2022/09/15/adobe-is-buying-figma-for-20b-taking-out-one-of-its-biggest-rivals-in-digital-design/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/08/figma.jpg?resize=1200,799",
      publishedAt: "2022-09-15T13:10:05Z",
      content:
        "Big news in the world of digital creative technology: Adobe today announced that it would acquire Figma for $20 billion, taking out one of its biggest rivals in the realm of digital design.\r\nBoth the… [+4719 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Lauren Simonds",
      title: "Just 2 days left to save $1,100 on Disrupt 2022 tickets",
      description:
        "It’s rare to find a sure thing these days, but a ticket to TechCrunch Disrupt 2022 is an investment that should produce years of dividends. For the next two days, the ROI on that pass will be exponentially higher thanks to an $1,100 discount on a regular-pric…",
      url: "https://techcrunch.com/2022/09/15/just-2-days-left-to-save-1100-on-disrupt-2022-tickets/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/countdown_regularreg_2days.jpg?resize=1200,675",
      publishedAt: "2022-09-15T11:12:49Z",
      content:
        "Its rare to find a sure thing these days, but a ticket to TechCrunch Disrupt 2022 is an investment that should produce years of dividends. For the next two days, the ROI on that pass will be exponent… [+2345 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ram Iyer",
      title: "Why growth activation matters",
      description:
        "Think of activation as getting users to a point where you know for sure that they will stay for a longer period of time. Which metrics separate customers who find value in your product from those who don’t?",
      url: "https://techcrunch.com/2022/09/15/why-growth-activation-matters/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1135213156.jpg?resize=1200,800",
      publishedAt: "2022-09-15T01:24:14Z",
      content:
        "More posts by this contributor\r\nYouve probably downloaded an app or visited a website and just closed it before getting much use out of it. You could have done this for a variety of reasons: Maybe th… [+2137 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Haje Jan Kamps",
      title:
        "Kav spools up a 3D printing factory for bike helmets in Silicon Valley",
      description:
        'Kav built a solar-powered 3D Printing Fab, which is able to print "thousands of helmets per month."',
      url: "https://techcrunch.com/2022/09/15/kav-3d-printing/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/kav.jpg?resize=1200,720",
      publishedAt: "2022-09-14T20:42:44Z",
      content:
        "I’m not a doctor, but I’ve been led to believe that heads and brains are important parts of human infrastructure, and protecting them makes a lot of sense. The other thing worth keeping in mind is th… [+2279 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Kyle Wiggers",
      title:
        "Winn.AI launches out of stealth with an AI assistant for sales calls",
      description:
        "Winn.AI, a startup developing a real-time assistant for sales calls, has raised $17 million in funding as it launches out of stealth.",
      url: "https://techcrunch.com/2022/09/15/winn-ai-launches-out-of-stealth-with-an-ai-assistant-for-sales-calls/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1292373024.jpg?resize=1200,800",
      publishedAt: "2022-09-09T04:25:56Z",
      content:
        "Conventionally, salespeople are responsible for juggling tasks like following a playbook, capturing responses, building rapport, and updating a customer relationship management (CRM) system during sa… [+3024 chars]",
    },
  ];

  constructor(){
      super();
      this.state ={
        articles: this.articles,
        loading: false
      }
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
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  urlToImage={element.urlToImage}
                  newsUrl ={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
