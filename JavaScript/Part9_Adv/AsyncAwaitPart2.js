function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
        }, 3000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched successfully!");
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log('Fetching blog data...');
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData,commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

        console.log(postData);
        console.log(commentData);
        
        console.log('Fetch Complete');
        
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
}

getBlogData()