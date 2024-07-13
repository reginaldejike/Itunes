export interface Items {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: null | string[];
  unavailable: boolean;
  unavailable_start: null | string;
  unavailable_end: null | string;
  id: string;
  parent_product_id: null | string;
  parent: null | any; // Adjust type as needed
  organization_id: string;
  product_image: any[]; // Adjust type as needed
  categories: any[]; // Adjust type as needed
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: {
    model_name: string;
    model_id: string;
    organization_id: string;
    filename: string;
    url: string;
    is_featured: boolean;
    save_as_jpg: boolean;
    is_public: boolean;
    file_rename: boolean;
    position: number;
  }[];
  current_price: {
    NGN: [number, null, any[]];
    // Add other currencies as needed
  }[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: null | number;
  discounted_price: null | number;
  buying_price: null | number;
  extra_infos: null; // Adjust type as needed
}
