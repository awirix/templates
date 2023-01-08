(local module {})

(local search {:handler (fn [query ctx]
                          [])})

(local layers [{:title :Layer
                :handler (fn [media ctx]
                           [])}])

(local actions [{:title :Stream
                 :max 1
                 :handler (fn [medias ctx]
                            (ctx.error "Not implemented"))}
                {:title :Download
                 :handler (fn [medias ctx]
                            (ctx.error "Not implemented"))}])

(tset module :search search)
(tset module :layers layers)
(tset module :actions actions)

module

