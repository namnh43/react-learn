import React from "react";

import LayoutVirus from "./component/Layout";
import GlobalVirus from "./component/Global-v2";
import CountryVirus from "./component/Country-v2";
import VirusCoronaProvider from './context/virusProvider';

class AppVirus extends React.PureComponent {
    render() {
        return (
            <LayoutVirus
                lv1="Home"
                lv2="App"
                lv3="Virus"
            >
                <VirusCoronaProvider>
                    <GlobalVirus />
                    <CountryVirus />
                </VirusCoronaProvider>
            </LayoutVirus>
        )
    }
}

export default AppVirus;