export type placeOrderPostReq = {
    isSingleProduct: boolean;
    isQueue: boolean;
    isTrade: boolean;
    productId: string;
    quantity: number;
    sizeId: string;
    colorId: string;
    materialId: string;
    variantPrice: number;
}
