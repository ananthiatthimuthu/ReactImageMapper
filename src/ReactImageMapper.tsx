import { Component, ReactNode, createElement, Fragment, createRef } from "react";
import ImageMapper from "react-img-mapper";
import { DynamicValue, EditableValue, WebImage } from "mendix";
import { ReactImageMapperContainerProps } from "../typings/ReactImageMapperProps";

import "./ui/ReactImageMapper.css";
export interface ImageMapperContainerProps {
    image?: DynamicValue<WebImage>;
    Data: EditableValue<string>;
}
export class ReactImageMapper extends Component<ReactImageMapperContainerProps> {
    private myRef;

    constructor(props) {
      super(props);
      this.myRef = createRef<HTMLDivElement>();
    }
      MapData = {
      name: "my-map",
      areas: JSON.parse(this.props.Data.displayValue)
    };
      handleClear = () => {
          if (this.myRef.current) {
            this.myRef.current.clearHighlightedArea();
          }
        };
      
        clicked = (area,i,e) => {
          console.log(area, i, e);
        };
  
      render(): ReactNode {
         return (<Fragment>
          <ImageMapper
            containerRef={this.myRef}
            src={this.props.image.status ==="available" ? this.props.image.value.uri: ""}
            map={(this.MapData)}
            stayMultiHighlighted
            onClick={this.clicked}
          />
          <button onClick={this.handleClear}>Clear</button>
          </Fragment>
          );
      }
}