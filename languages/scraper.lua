local _module_0 = { }
local search = {
	title = 'Search',
	handler = function(query, progress)
		return { }
	end
}
_module_0["search"] = search
local layers = {
	{
		title = 'Layer 1',
		handler = function(media, progress)
			return { }
		end
	}
}
_module_0["layers"] = layers
local prepare
prepare = function(media, progress)
	return media
end
_module_0["prepare"] = prepare
local stream
stream = function(media, progress)
	return error('Not implemented')
end
_module_0["stream"] = stream
local download
download = function(media, progress)
	return error('Not implemented')
end
_module_0["download"] = download
return _module_0
