plugin {
    tx_searchcore {
        settings {
            connections {
                elasticsearch {
                    host = localhost
                    port = 9200
                }
            }

            indexing {
                tt_content {
                    indexer = Codappix\SearchCore\Domain\Index\TcaIndexer

                    additionalWhereClause (
                        tt_content.CType NOT IN ('gridelements_pi1', 'list', 'div', 'menu', 'shortcut', 'search', 'login')
                        AND (tt_content.bodytext != '' OR tt_content.header != '')
                    )

                    mapping {
                        CType {
                            type = keyword
                        }
                    }
                }

                pages {
                    indexer = Codappix\SearchCore\Domain\Index\TcaIndexer\PagesIndexer
                    abstractFields = abstract, description, bodytext
                    contentFields = header, bodytext

                    mapping {
                        CType {
                            type = keyword
                        }
                    }
                }
            }

            searching {
                fields {
                    query = _all
                }
            }
        }
    }
}

module.tx_searchcore < plugin.tx_searchcore
