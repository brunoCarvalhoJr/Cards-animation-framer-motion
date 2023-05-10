import styled from 'styled-components';
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3C3861;
`;

export const Box = styled(motion.div)`
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    height: 200px;
    cursor: pointer;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 
                0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

export const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;