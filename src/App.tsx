import { ChakraProvider } from "@chakra-ui/react";
import FlipCards from "./components/FlipCards";
import { dataInitial } from "./components/data/dataInitial";
import { dataFahrrad } from "./components/data/dataFahrrad";
import { dataGesundheit } from "./components/data/dataGesundheit";

const App: React.FC = () => {
    return (
        <ChakraProvider>
            <FlipCards 
                initialDataList={dataInitial}
                fahrradDataList={dataFahrrad}
                gesundheitDataList={dataGesundheit}
            />
        </ChakraProvider>
    );
}

export default App;