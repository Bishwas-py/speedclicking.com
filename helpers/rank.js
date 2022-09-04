function getRank(countsPerSecond) {
    if (countsPerSecond < 4) {
        return {
            name: "Sloth",
            description: "You are a sloth. You are slow and lazy. You are very bad clicker. Keep trying, be a lion.",
            icon: '/assets/sloth.png'
        };
    } else if (countsPerSecond < 5) {
        return {
            name: "Tortoise",
            description: "You are a tortoise. You are slow and steady, but you are bad clicker. Keep trying, be a Cheetah.",
            icon: '/assets/tortoise.png'
        };
    } else if (countsPerSecond < 6) {
        //    panda
        return {
            name: "Panda",
            description: "You are a panda. You are slow and lazy. You are not a good clicker.",
            icon: '/assets/panda.png'
        }
    } else if (countsPerSecond < 7) {
        //    squirrel
        return {
            name: "Fox",
            description: "You are a fox. You are medium and active. You are trying to be a good clicker.",
            icon: '/assets/fox.png'
        }
    } else if (countsPerSecond < 8) {
        //    fox
        return {
            name: "Rabbit",
            description: "You are a rabbit. You are trying to be fast and active. Keep clicking to be a true unicorn.",
            icon: '/assets/rabbit.png'
        }
    } else if (countsPerSecond < 9) {
        //    Lynx
        return {
            name: "Lynx",
            description: "You are a lynx. You are fast and active. You are being a clicker.",
            icon: '/assets/lynx.png'
        }
    } else if (countsPerSecond < 10) {
        //    deer
        return {
            name: "Reindeer",
            description: "You are a deer. You are fast and active. You are being awesome.",
            icon: '/assets/reindeer.png'
        }
    } else {
        // unicorn
        return {
            name: "Cheetah",
            description: "You are a cheetah. You are fast and active. You are super awesome.",
            icon: '/assets/cheetah.png'
        }
    }
}

export default getRank;
