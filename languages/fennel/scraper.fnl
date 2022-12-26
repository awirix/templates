(local module {})

(local search {:handler (fn [query progress]
                          [])})

(local layers [{:title :Layer
                :handler (fn [media progress]
                           [])}])

(local actions [{:title :Stream
                 :handler (fn [medias progress]
                            (error "Not implemented"))}
                {:title :Download
                 :handler (fn [medias progress]
                            (error "Not implemented"))}])

(tset module :search search)
(tset module :layers layers)
(tset module :actions actions)

module
