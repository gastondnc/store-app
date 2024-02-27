export type Delivery = 
    {
        standard: {time: number; value: number;};
        premium:{time: number; value: number;};
        location:{
            zones: string[];
            value: number;
        } 
    }