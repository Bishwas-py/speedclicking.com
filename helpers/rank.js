function getRank(countsPerSecond) {
    if (countsPerSecond < 4) {
        return {
            name: "Donkey",
            description: "You are a donkey. You are slow and lazy. You are very bad clicker. Keep trying, be a lion.",
            icon: '/assets/donkey.png'
        };
    } else if (countsPerSecond < 5) {
        return {
            name: "Turtle",
            description: "You are a turtle. You are slow and steady, but you are bad clicker. Keep trying, be a Cheetah.",
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
            name: "Strider",
            description: "You are a strider. You are fast and active. You are being a clicker.",
            icon: '/assets/strider.png'
        }
    } else if (countsPerSecond < 10) {
        //    deer
        return {
            name: "Dolphin",
            description: "You are a dolphin. You are fast and active. You are awesome.",
            icon: '/assets/dolphin.png'
        }
    } else {
        // unicorn
        return {
            name: "Spider",
            description: "You are a spider. You are fast and active. You are super awesome.",
            icon: '/assets/spider.png'
        }
    }
}

export default getRank;
