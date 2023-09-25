document.addEventListener("DOMContentLoaded", function () {
    const tweetForm = document.getElementById("tweet-form");
    const newsfeed = document.getElementById("newsfeed");
    const tweets = [];

    tweetForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const usernameInput = document.getElementById("username");
        const tweetInput = document.getElementById("tweet");
        
        const username = usernameInput.value;
        const tweetText = tweetInput.value;
        
        if (username && tweetText) {
            const tweetObject = { username, tweetText };
            tweets.unshift(tweetObject); // Add the new tweet to the beginning of the array
            renderTweets();
            tweetForm.reset(); // Clear the form
        }
    });

    function renderTweets() {
        newsfeed.innerHTML = ""; // Clear the newsfeed

        for (const tweet of tweets) {
            const tweetElement = createTweetElement(tweet);
            newsfeed.appendChild(tweetElement);
        }
    }

    function createTweetElement(tweet) {
        const tweetDiv = document.createElement("div");
        tweetDiv.classList.add("tweet");

        const usernameDiv = document.createElement("div");
        usernameDiv.classList.add("username");
        usernameDiv.textContent = tweet.username;

        const tweetContentDiv = document.createElement("div");
        tweetContentDiv.textContent = tweet.tweetText;

        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.textContent = "Like";
        likeButton.addEventListener("click", function () {
            // Add your like button functionality here
        });

        const retweetButton = document.createElement("button");
        retweetButton.classList.add("retweet-button");
        retweetButton.textContent = "Retweet";
        retweetButton.addEventListener("click", function () {
            // Add your retweet button functionality here
        });

        tweetDiv.appendChild(usernameDiv);
        tweetDiv.appendChild(tweetContentDiv);
        tweetDiv.appendChild(likeButton);
        tweetDiv.appendChild(retweetButton);

        return tweetDiv;
    }
});
