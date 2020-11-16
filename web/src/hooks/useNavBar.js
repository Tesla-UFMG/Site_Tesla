import { useState } from "react";

const useNavBar = () => {
    const [color, setColor] = useState('');
    const [display, setDisplay] = useState('');

    var windowHeight = window.innerHeight;

    function handleScroll(last_known_scroll_position, flag) {
        if (last_known_scroll_position <= windowHeight - 50) {
            setDisplay('')
            setColor('')
        } else if (last_known_scroll_position >= (windowHeight - 50) && last_known_scroll_position <= ((windowHeight * 2) - 50)) {
            setColor('preto')
            setDisplay('none')
        } else if (flag && last_known_scroll_position >= ((windowHeight * 2) - 50) && last_known_scroll_position <= ((windowHeight * 3) - 50)) {
            setColor('')
        } else if (flag && last_known_scroll_position >= ((windowHeight * 3) - 50)) {
            setColor('preto')
        }
    }

    return [{ color, display }, handleScroll];
};

export default useNavBar;