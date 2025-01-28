import { newArticleCard } from "./newArticleCard";
import { articleCard } from "./articleCard";
import { mainEvents } from "../events/mainEvents";

export const mainContent = () => {
  mainEvents();
  return `    
    <div class="flex column main-image">
        <img src="images/image-web-3-desktop.jpg" alt="colorful image of technical building blocks" />
        <div class="flex row bright-future-container">
            <div class="bright-future" tabindex="0" role="heading">The Bright Future of Web 3.0?</div>
            <div class="flex column">
                <p tabindex="0">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <a href="#">READ MORE</a>
            </div>
        </div>
    </div>
    <div class="flex column new-articles">
        <h2 tabindex="0">New</h2>
        <ul role="list" class="flex column">
            ${newArticleCard({
              title: "Hydrogen VS Electric Cars",
              content: "Will hydrogen-fueled cars ever catch up to EVs?",
            })}
            ${newArticleCard({
              title: "The Downsides of AI Artistry",
              content:
                "What are the possible adverse effects of on-demand AI image generation?",
            })}
            ${newArticleCard({
              title: "Is VC Funding Drying Up?",
              content:
                "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
            })}
        </ul>
    </div>
    ${articleCard({
      title: "Reviving Retro PCs",
      number: "01",
      image: "image-retro-pcs.jpg",
      content: "What happens when old PCs are given modern upgrades?",
      alt: "retro-pc",
    })}
    ${articleCard({
      title: "Top 10 Laptops of 2022",
      number: "02",
      image: "image-top-laptops.jpg",
      content: "Our best picks for various needs and budgets.",
      alt: "laptop-keyboard",
    })}
    ${articleCard({
      title: "The Growth of Gaming",
      number: "03",
      image: "image-gaming-growth.jpg",
      content: "How the pandemic has sparked fresh opportunities.",
      alt: "game-controller",
    })}
    
`;
};
