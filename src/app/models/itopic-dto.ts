export interface ITopicDTO {
    // topic dto
    TopicID: number;
    Topic: string;
    TopicBody: string;
    Description: string;
    Author: string;
    Level: number;
    DateUpdated: Date;
    Link: string;
    LinkMore: string;

    // fields added to deal with topic-detail relation
    ParentTopicID: number;
    Order: number;

    // linked content
    Images: any;
    Details: any;

    // additional
    HasDetail: boolean;
}
