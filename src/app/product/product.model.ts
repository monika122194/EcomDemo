
export class ProductModel {
    public ItemID: number;
    public ItemCode: string;
    public ItemName: string;
    public Rate: number;
    public Unit: string;
    public IsActive: number;
    public ItemCategoryID: number;
    public ItemDescription: string;
    public ImageName: string;
    public brand: any;
    public total_qty: any;
    public remaining_qty: any;
    public discount: any;
    public review: any;
    public length: any;
    public breadth: any;
    public height: any;
    public weight: any;
    public is_featured: any;
    public CreatedBy: string;
    public CreatedOn: any;
    public LastUpdatedBy: string;
    public LastUpdatedOn: any;
    public HSNCodeID: number;
    public website_id: string;
    public discount_price: number;
    public product_image: string;
    public special_price: number;

    constructor(ItemID: number, ItemCode: string, ItemName: string, Rate: number, Unit: string, IsActive: number, ItemCategoryID: number
                , ItemDescription: string, ImageName: string, brand: any, total_qty: any, remaining_qty: any, discount: any, review: any
                , length: any, breadth: any, height: any, weight: any, is_featured: any, CreatedBy: string, CreatedOn: any
                , LastUpdatedBy: string, LastUpdatedOn: any, HSNCodeID: number, website_id: string, discount_price: number
                , product_image: string, special_price: number) {
        this.ItemID = ItemID;
        this.ItemCode = ItemCode;
        this.ItemName = ItemName;
        this.Rate = Rate;
        this.Unit = Unit;
        this.IsActive = IsActive;
        this.ItemCategoryID = ItemCategoryID;
        this.ItemDescription = ItemDescription;
        this.ImageName = ImageName;
        this.brand = brand;
        this.total_qty = total_qty;
        this.remaining_qty = remaining_qty;
        this.discount = discount;
        this.review = review;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
        this.weight = weight;
        this.is_featured = is_featured;
        this.CreatedBy = CreatedBy;
        this.CreatedOn = CreatedOn;
        this.LastUpdatedBy = LastUpdatedBy;
        this.LastUpdatedOn = LastUpdatedOn;
        this.HSNCodeID = HSNCodeID;
        this.website_id = website_id;
        this.discount_price = discount_price;
        this.product_image = product_image;
        this.special_price = special_price;
    }
}
