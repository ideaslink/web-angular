export interface ITopicDetailDTO {
    TopicDetailID: number;
    TopicID: number;    // temp: 1 to many between topic and topic detail
    Title: string;
    Icon: string;
    Order: number;
    Content: string;
    ContentImages: string[];
    DateUpdated: Date;
    // Link: string;
    // LinkImage: string;
}
