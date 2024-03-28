import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Box, Button, Heading, Text, Flex, Spacer, Select } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { styles, Styles } from "./styles";

interface DataItem {
    front: string;
    back: string;
}

interface FlipCardsProps {
    initialDataList: DataItem[];
    fahrradDataList: DataItem[];
    gesundheitDataList: DataItem[];
}

const FlipCards: React.FC<FlipCardsProps> = (props) => {
    const { fahrradDataList, gesundheitDataList, initialDataList } = props;

    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const [selectedList, setSelectedList] = useState<SelectedList>('initialDataList');

    const dataLists = {
        initialDataList: initialDataList,
        fahrradDataList: fahrradDataList,
        gesundheitDataList: gesundheitDataList,
    };

    type SelectedList = keyof typeof dataLists;

    const dataList = dataLists[selectedList];
    const currentCard: DataItem = dataList[currentCardIndex];
    const style: Styles = styles;

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handlePreviousCard: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsFlipped(false);
        setCurrentCardIndex((currentCardIndex - 1 + dataList.length) % dataList.length);
    };

    const handleNextCard: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsFlipped(false);
        setCurrentCardIndex((currentCardIndex + 1) % dataList.length);
    };

    const handleDataListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedList = e.target.value as SelectedList;
        setSelectedList(selectedList);
        setCurrentCardIndex(0);
    };

    return (
        <>
        <Flex style={styles.container}>
            <Box>
                <Heading as="h1" style={style.heading}>Flip Cards App</Heading>
                <Select 
                    value={selectedList}
                    style={style.selectContainer}
                    iconColor="blue.100"
                    iconSize="2rem"
                    onChange={handleDataListChange}>
                    <option style={style.option} value="initialDataList">
                        Choose a theme
                    </option>
                    <option style={style.option} value="fahrradDataList">
                        Das Fahrrad
                    </option>
                    <option style={style.option} value="gesundheitDataList">
                        Die Gesundheit
                    </option>
                </Select>
                <ReactCardFlip
                    isFlipped={isFlipped} 
                    flipDirection="horizontal"
                    flipSpeedFrontToBack={0.1}
                    flipSpeedBackToFront={0.1}>

                    <Box style={style.boxContainerFront} onClick={handleClick}>
                        <Flex style={style.flexContainer}>
                            <Text>{currentCard.front}</Text>
                        </Flex>
                    </Box>
                    <Box style={style.boxContainerBack} onClick={handleClick}>
                        <Flex style={style.flexContainer}>
                            <Text>{currentCard.back}</Text>
                        </Flex>
                    </Box>
                </ReactCardFlip>

                <Flex mt={4}>
                    <Button
                        width="40%" 
                        variant="solid" 
                        colorScheme="blue" 
                        leftIcon={<ArrowBackIcon />}
                        onClick={handlePreviousCard}>
                        Previous
                    </Button>
                    <Spacer />
                    <Button 
                        width="40%"
                        variant="solid" 
                        colorScheme="blue"
                        rightIcon={<ArrowForwardIcon />} 
                        onClick={handleNextCard}>
                        Next
                    </Button>
                </Flex>
            </Box>
        </Flex>
        </>
    );
}
 
export default FlipCards;