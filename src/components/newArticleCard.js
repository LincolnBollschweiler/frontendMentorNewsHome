export const newArticleCard = ({ title, content }) => `
    <li class="new-article flex column">
        <h2 tabindex="0">${title}</h2>
        <p tabindex="0">${content}</p>
    </li>
`;
