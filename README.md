Flip Cards App
This application allows users to interact with flip cards, displaying content on both the front and back sides. Users can navigate through the cards using navigation buttons to view the previous or next card. The application is designed with responsive layout and styled using Chakra UI components for user interface.

Technologies used:
- React
- TypeScript
- Chakra UI
- CSS

Features:
1. Interactive flip cards with front and back content
2. Navigation buttons for moving between cards
3. Responsive design for optimal viewing on various devices
_______________________________________________________________

App component
function App() {
    return (
        <ChakraProvider>
            <FlipCards />
        </ChakraProvider>
    );
}
This App function is a React component responsible for rendering the entire application. It utilizes the ChakraProvider component from the Chakra UI library to provide styling and theming to its child components. Inside the ChakraProvider, it renders the FlipCards component.
By wrapping FlipCards with ChakraProvider, you ensure that all components within FlipCards have access to Chakra UI styling and theming, enabling consistent styling throughout your application.

FlipCards component
interface DataItem {
    front string;
    back: string;
}
// This block of code defines the DataItem interface, which is used to type elements of the dataList array. Each element of the array should have two properties: front (the front side of the card) and back (the back side of the card), both of which are of type string.

interface Styles {
    container: CSSProperties;
   ...
}
// This block of code defines the Styles interface, which is used to type the style object containing CSS styles. It contains four properties: container, heading, flexContainer, and boxContainer, each of which has the type CSSProperties. These properties are intended to be used to apply styles to different elements in the component.

const FlipCards: React.FC<FlipCardsProps> = (props) => {
    const { fahrradDataList, gesundheitDataList, initialDataList } = props;
}
// This code block defines a functional component FlipCards, which accepts an object props of type FlipCardsProps. Using object destructuring, we extract three properties, which are passed to the component via props.

const [isFlipped, setIsFlipped] = useState<boolean>(false);
// isFlipped: This variable represents whether the current card is flipped or not. It is initialized with a boolean value of false, indicating that initially, the card is not flipped.

[currentCardIndex, setCurrentCardIndex] = useState<number>(0);
// currentCardIndex: This variable represents the index of the currently displayed card in the dataList. It is initialized with a value of 0, indicating that the first card in the list will be displayed initially.

const currentCard: DataItem = dataList[currentCardIndex];
// currentCard variable is also declared, which is of type DataItem. It retrieves the current card object from the dataList array based on the currentCardIndex. This allows the component to display the front and back content of the current card dynamically based on the index.

const [selectedList, setSelectedList] = useState<SelectedList>('initialDataList');
// This line ensures that selectedList is initialized with the value 'initialDataList' and is typed according to the SelectedList type. 
useState is a React hook used to add state to functional components. It returns an array with two elements: the current state value and a function to update the state.
<SelectedList> is a type assertion, indicating that the state variable selectedList will have a type defined by the SelectedList type. 
'initialDataList' is the initial value for the state variable.

const dataLists = {
    initialDataList: initialDataList,
    ...,
};
// This code block initializes an object named dataLists with properties. Each property is assigned the corresponding array of data items (initialDataList, fahrradDataList, and gesundheitDataList) passed as props to the FlipCards component. 
This structure allows the FlipCards component to access different data lists based on the selected option. It provides a convenient way to organize and access the data within the component.
This structure allows the FlipCards component to access different data lists based on the selected option. It provides a convenient way to organize and access the data within the component.

type SelectedList = keyof typeof dataLists;
// This line of code defines a new type SelectedList, which represents the keys of the dataLists object.
- typeof dataLists retrieves the type of the dataLists object. This type will include all the keys present in the dataLists object.
- keyof typeof dataLists is a TypeScript construct that retrieves the union type of all keys of the dataLists object.
- SelectedList is then assigned this union type, meaning it can only be one of the keys of the dataLists object.
In summary, SelectedList represents the possible options that can be selected from the dataLists object. It ensures that selectedList variable, which will hold the selected option, can only be one of these keys.

const dataList = dataLists[selectedList];
// This line retrieves the data list corresponding to the currently selected option (selectedList) from the dataLists object and assigns it to the variable dataList.

const currentCard: DataItem = dataList[currentCardIndex];
// This line retrieves the current card (an item from the data list) based on the currentCardIndex from the dataList. currentCardIndex is the index of the card that is currently being displayed. The currentCard variable is then typed as DataItem, indicating that it's an object with properties front and back.

const handleClick = () => {
    setIsFlipped(!isFlipped);
};
// The handleClick function toggles the isFlipped state variable. When called, it flips the current state of the card. If the card was facing front (i.e., isFlipped was false), it changes it to face the back (i.e., !isFlipped evaluates to true). If the card was facing the back (i.e., isFlipped was true), it changes it to face the front (i.e., !isFlipped evaluates to false). This function is typically used as an event handler for clicking on the card element to flip it.

const handlePreviousCard: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsFlipped(false);
    setCurrentCardIndex((currentCardIndex - 1 + dataList.length) % dataList.length);
    };
// The handlePreviousCard function is an event handler for clicking on the button to view the previous card. 
It sets the isFlipped state variable to false, ensuring that the card is displayed with its front side when switching to the previous card.
It calculates the index of the previous card by decrementing the currentCardIndex by 1 and applying modular arithmetic to ensure that the index remains within the bounds of the dataList array. If the currentCardIndex is at the beginning of the array (0), decrementing it would make it -1, and by adding dataList.length and taking the modulus, it ensures that it wraps around to the last index of the array.
It updates the currentCardIndex state variable to the calculated index, effectively switching to the previous card in the dataList.
This function essentially handles the logic for navigating to the previous card in the list.

const handleNextCard: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsFlipped(false);
    setCurrentCardIndex((currentCardIndex + 1) % dataList.length);
};
//  The handleNextCard function is an event handler for clicking on the button to view the next card.
It sets the isFlipped state variable to false, ensuring that the card is displayed with its front side when switching to the next card.
It calculates the index of the next card by incrementing the currentCardIndex by 1 and applying modular arithmetic to ensure that the index remains within the bounds of the dataList array. If the currentCardIndex is at the end of the array (equal to dataList.length - 1), incrementing it would make it exceed the array bounds, and by taking the modulus of the sum with dataList.length, it wraps around to the beginning of the array.
It updates the currentCardIndex state variable to the calculated index, effectively switching to the next card in the dataList.
This function handles the logic for navigating to the next card in the list.

const handleDataListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedList = e.target.value as SelectedList;
    setSelectedList(selectedList);
    setCurrentCardIndex(0);
};
// This function handleDataListChange is an event handler for when the selection in the <Select> element changes.
* (e: React.ChangeEvent<HTMLSelectElement>) => { ... }: This defines a function that takes an event argument of type React.ChangeEvent<HTMLSelectElement>, which represents the change event triggered by the <Select> element.
* const selectedList = e.target.value as SelectedList;: This line retrieves the value of the selected option from the <Select> element's value attribute. Since e.target.value is of type string, it's asserted as SelectedList using the as keyword. This ensures type safety and informs TypeScript that selectedList should be one of the keys of the dataLists object.
* setSelectedList(selectedList);: This line updates the selectedList state variable with the newly selected value.
* setCurrentCardIndex(0);: This line resets the currentCardIndex state variable to 0 when the selected list changes. This ensures that the first card of the newly selected list is displayed.
In summary, when the user selects a different option from the <Select> element, this function updates the state variables selectedList and currentCardIndex accordingly, triggering a re-render of the component with the updated data.

const style: Styles = {}
This code block defines an object named style, which contains CSS styles for various elements used within the FlipCards component.
Overall, this style object defines consistent styling for different elements within the FlipCards component, ensuring a cohesive visual presentation.

return (...)
This portion of the code is the JSX markup returned by the FlipCards component.
This JSX markup defines the structure and behavior of the flip cards UI, utilizing Chakra UI components and custom styles defined in the style object.
