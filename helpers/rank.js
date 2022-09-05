function getRank(countsPerSecond) {
    if (countsPerSecond < 4) {
        return {
            name: "Sloth",
            description: "You are a sloth. You are slow and lazy. You are very bad clicker. Keep trying, be a lion.",
            icon: '/_next/image?url=%2Fassets%2Fsloth.png&w=640&q=75'
        };
    } else if (countsPerSecond < 5) {
        return {
            name: "Tortoise",
            description: "You are a tortoise. You are slow and steady, but you are bad clicker. Keep trying, be a Cheetah.",
            icon: '/_next/image?url=%2Fassets%2Ftortoise.png&w=640&q=75'
        };
    } else if (countsPerSecond < 6) {
        //    panda
        return {
            name: "Panda",
            description: "You are a panda. You are slow and lazy. You are not a good clicker.",
            icon: '/_next/image?url=%2Fassets%2Fpanda.png&w=640&q=75'
        }
    } else if (countsPerSecond < 7) {
        //    squirrel
        return {
            name: "Fox",
            description: "You are a fox. You are medium and active. You are trying to be a good clicker.",
            icon: '/_next/image?url=%2Fassets%2Ffox.png&w=640&q=75'
        }
    } else if (countsPerSecond < 8) {
        //    fox
        return {
            name: "Rabbit",
            description: "You are a rabbit. You are trying to be fast and active. Keep clicking to be a true unicorn.",
            icon: '/_next/image?url=%2Fassets%2Frabbit.png&w=640&q=75'
        }
    } else if (countsPerSecond < 9) {
        //    lion
        return {
            name: "Lynx",
            description: "You are a lynx. You are fast and active. You are being a clicker.",
            icon: '/_next/image?url=%2Fassets%2Flynx.png&w=640&q=75'
        }
    } else if (countsPerSecond < 10) {
        //    deer
        return {
            name: "Reindeer",
            description: "You are a deer. You are fast and active. You are being awesome.",
            icon: '/_next/image?url=%2Fassets%2Freindeer.png&w=640&q=75'
        }
    } else {
        // unicorn
        return {
            name: "Cheetah",
            description: "You are a cheetah. You are fast and active. You are super awesome.",
            icon: '/_next/image?url=%2Fassets%2Fcheetah.png&w=640&q=75'
        }
    }
}

export default getRank;
