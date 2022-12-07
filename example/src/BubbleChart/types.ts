export namespace BubbleChartTypes {
  export type Data = {
    [x: string]: any;
    id: number;
    name: string;
    size: number;
    fillColor: string;
    theme?: string;
  };

  export type ForceData = {
    size: number;
  };
}
