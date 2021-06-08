FilePond.registerPlugin(
	FilePondPluginImagePreview,
	FilePondPluginImageResize,
	FilePondPluginFileEncode
);

FilePond.setOptions({
	stylePanelAspectRatio: 150 / 100,
	imageResizeTargetWidth: 100,
	imageResizeTargetHeight: 150,

	// stylePanelAspectRatio: 1 / coverAspectRatio,
	// imageResizeTargetWidth: coverWidth,
	// imageResizeTargetHeight: coverHeight,
});

FilePond.parse(document.body);
