import React, {useEffect, useState} from 'react';
import {css, StyleSheet} from 'aphrodite';

interface Props {
    message: string;
}

const GenericFailMessage = ({message}: Props) => {
    const [isVisible, setIsVisible] = useState(false),
        styles = StyleSheet.create({
            container: {
                padding: 5,
                width: "auto",
                maxWidth: "auto",
                height: "max-content",
                margin: "0 auto",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.5s ease-in-out",
            },
            visible: {
                opacity: 1
            },
            message: {
                margin: 0
            }
        });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={css(styles.container, isVisible && styles.visible)}>
            <h4 className={css(styles.message)}>{message}<span role="img" aria-label="sad face">&#128542;</span></h4>
        </div>
    );
};


export default GenericFailMessage;
