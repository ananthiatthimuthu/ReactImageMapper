import { Component, ReactNode, createElement } from "react";
import { ReactImageMapperPreviewProps } from "../typings/ReactImageMapperProps";

export class preview extends Component<ReactImageMapperPreviewProps> {
    render(): ReactNode {
        return <div>Image Mapper</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ReactImageMapper.css");
}
