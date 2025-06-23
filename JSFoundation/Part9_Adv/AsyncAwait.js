function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John Doe', age: 30});
        }, 1000);
    })
}

async function getUserData() {
    try {
        console.log('Fetching user data...');
        const userData = await fetchUserData();
        console.log('User data fetched:', userData);
        
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

getUserData();