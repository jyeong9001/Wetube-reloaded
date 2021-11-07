const videos = [
    {
        title:"First video",
        rating:"4.5",
        comments:"2",
        createdAt:"1hours ago",
        views:"60",
        id:"1"
    },
    {
        title:"Second video",
        rating:"4",
        comments:"199",
        createdAt:"15hours ago",
        views:1,
        id:"2"
    },
    {
        title:"Third video",
        rating:"4.9",
        comments:"423",
        createdAt:"1hours ago",
        views:"2299",
        id:"3"
    },
];

export const trending = (req,res) => {
    return res.render("home", {pageTitle:"Home", videos})
};
export const watch = (req,res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
};
export const edit = (req,res) => {
    const {id} = req.params;
    const video = videos[id-1];
    res.render("edit", {pageTitle: `Editing ${video.title}`}); 
};
export const search = (req,res) => res.send("search"); 
export const upload = (req,res) => res.send("upload"); 
export const deleteVideo = (req,res) => res.send("deleteVideo"); 
