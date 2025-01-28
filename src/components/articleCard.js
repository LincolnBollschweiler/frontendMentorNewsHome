export const articleCard = ({ title, number, image, content, alt }) => `
    <div role="gridcell" class="flex row article-card">
        <img tabindex="0" src="images/${image}" alt="${alt}">
        <div class="flex column">
            <div tabindex="0" role="banner" aria-label="article">${number}</div>
            <a href="#">${title}</a>
            <p tabindex="0">${content}</p>
        </div>
    </div>
`;
