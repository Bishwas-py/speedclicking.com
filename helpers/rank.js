function getRank(countsPerSecond) {
    if (countsPerSecond < 1.5) {
        return {
            name: "Sloth",
            description: "You are a sloth. You are slow and lazy. You are not very bad clicker. Keep trying, be a lion.",
            icon: '/assets/sloth.png'
        };
    } else if (countsPerSecond < 2.5) {
        return {
            name: "Koala",
            description: "You are a koala. You are slow and lazy. You are bad clicker. Keep trying, be a leopard.",
            icon: '/assets/koala.png'
        };
    } else if (countsPerSecond < 3.5) {
        //    panda
        return {
            name: "Panda",
            description: "You are a panda. You are slow and lazy. You are not a good clicker.",
            icon: '/assets/panda.png'
        }
    } else if (countsPerSecond < 4.5) {
        //    squirrel
        return {
            name: "Squirrel",
            description: "You are a squirrel. You are medium and active. You are trying to be a good clicker.",
            icon: '/assets/squirrel.png'
        }
    } else if (countsPerSecond < 5.5) {
        //    fox
        return {
            name: "Fox",
            description: "You are a fox. You are trying to be fast and active. Keep clicking to be a true unicorn.",
            icon: '/assets/fox.png'
        }
    } else if (countsPerSecond < 6.5) {
        //    lion
        return {
            name: "Lion",
            description: "You are a lion. You are fast and active. You are being a clicker.",
            icon: '/assets/lion.png'
        }
    } else if (countsPerSecond < 7.5) {
        //    deer
        return {
            name: "Reindeer",
            description: "You are a deer. You are fast and active. You are being awesome.",
            icon: '/assets/reindeer.png'
        }
    } else if (countsPerSecond < 8.5) {
        //    cheetah
        return {
            name: "Cheetah",
            description: "You are a cheetah. You are fast and active. You are super awesome.",
            icon: '/assets/cheetah.png'
        }
    } else {
        // unicorn
        return {
            name: "Unicorn",
            description: "You are a unicorn. You are fast and active. You are extremely awesome.",
            icon: '/assets/unicorn.png'
        }
    }
}

export default getRank;
