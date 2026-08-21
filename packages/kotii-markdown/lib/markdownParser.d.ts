export function parseMarkdown(markdown: any): {
    metaDataKeys: {} | null;
    description: any;
    specialContent: {
        special: any;
    }[] | null;
    markDownSplit: any;
    html: any;
    toc: any[];
};
export function extractMetaData(markdown: any): any;
export function extractMetaKeyPairs(extractedHeaderString: any): {} | null;
export function extractDescription(markdown: any): any;
export function extractTitle(markdown: any): void;
export function extractContent(markdown: any): void;
export function extractSpecialContent(markdown: any): {
    special: any;
}[] | null;
export function getMarkdownDemos(markdown: any): void;
export function getMarkdownComponents(contentDictionary: any): void;
export function getMarkdownVideos(contentDictionary: any): void;
export function splitMarkdown(markdown: any): any;
export function convertMarkdown(markdown: any): any;
export function idifyString(string: any): any;
