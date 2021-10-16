import React from "react";
import {helper} from '../helpers/common'
import { apiVirus } from "../services/api";
import VirusContext from './virusContext';

class VirusProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            globalVirus: {},
            countriesVirus: []
        }
    }

    async componentDidMount()         {
        //tien hanh call api o day va cap nhat lai state o day
        this.setState({loading: true});
        const virus = await apiVirus.getDataVirusCorona();
        console.log (virus);
        if (!helper.isEmptyObject(virus)) {
            //api co data tra ve
            //cap nhat lai state cho global
            if (virus.hasOwnProperty('Global')) {
                this.setState({
                    ...this.sate, //lay lai toan bo state cu sang state moi
                    ...{ globalVirus: virus['Global']} // cap nhat lai state cho thang global
                })
            }
            //Cap nhat lai state cho country virus
            if (virus.hasOwnProperty('Countries')) {
                this.setState({
                    ...this.sate, //lay lai toan bo state cu sang state moi
                    ...{ countriesVirus: virus['Countries'] } // cap nhat lai state cho thang countriesVirus
                })
            }
        }
        this.setState({loading: false});
    }

    render() {
        return (
            <VirusContext.Provider value={this.state}>
                {this.props.children}
            </VirusContext.Provider>
        )
    }   
}

export default VirusProvider;