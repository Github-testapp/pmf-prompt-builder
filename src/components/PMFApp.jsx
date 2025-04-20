import React, { useState } from 'react';

// テンプレート定義
const templates = [
    // Web Application Development Template
    {
        id: 'web-app',
        name: 'Webアプリケーション開発',
        data: {
            role: 'フルスタックWeb開発',
            outputImage: 'オンライン予約システムのアーキテクチャ設計と主要コンポーネントの実装コード',
            background: '小規模な美容サロン向けにシンプルで導入しやすい予約システムを開発したい',
            goalElements: [
                'カレンダーベースの予約UI',
                '顧客管理機能',
                'スタッフ/サービス管理機能',
                'メール通知システム',
                'レスポンシブデザイン'
            ],
            sharedImage: 'ターゲットは技術知識の少ないサロンオーナー。シンプルなUI、直感的な操作性。デザインはミニマルで洗練された印象。参考: Squareの予約システム',
            workInstructions: [
                'システムアーキテクチャを設計する',
                'フロントエンド・バックエンドの技術スタックを選定する',
                '主要コンポーネントのサンプルコードを作成する',
                'データベース設計を行う'
            ],
            techSpecs: {
                frontend: 'React 18、TailwindCSS、React Hook Form',
                backend: 'Node.js、Express、WebSocket',
                database: 'PostgreSQL、Redis（キャッシュ）',
                infrastructure: 'AWS EC2、S3、Docker'
            },
            uiSpecs: {
                interaction: 'カレンダードラッグ&ドロップ操作、リアルタイム更新',
                responsive: 'モバイルファースト設計、ブレイクポイント: sm(640px)、md(768px)、lg(1024px)',
                accessibility: 'WCAG 2.1 AAレベル準拠、スクリーンリーダー対応'
            },
            designSpecs: {
                font: 'Noto Sans JP（日本語）、Roboto（英数字）',
                colors: 'プライマリ: #4F46E5、セカンダリ: #10B981、グレースケール: #F9FAFB〜#1F2937',
                style: 'ミニマルでクリーンなデザイン、ライトモード/ダークモード対応'
            },
            layoutSpecs: {
                pageStructure: 'ヘッダー（ナビゲーション）、メインコンテンツ、フッター（システム情報）',
                componentPlacement: 'サイドパネル（フィルター）、メイン（カレンダー/リスト表示）'
            },
            constraints: [
                'コストを抑えるため、可能な限りオープンソースの技術を使用する',
                '将来の拡張性を考慮した設計にする',
                '初期導入の技術的ハードルを低くする',
                'セキュリティ（特に個人情報保護）に十分配慮する'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- アーキテクチャ図（テキスト表現）\n- 技術スタックの選定理由\n- 主要コンポーネントのサンプルコード\n- データベース設計図（テキスト表現）\n- 実装手順の概要',
            style: '技術的に正確でありながら、非エンジニアにも理解しやすい説明',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // API Design Template
    {
        id: 'api-design',
        name: 'API設計',
        data: {
            role: 'APIアーキテクト',
            outputImage: 'Eコマースプラットフォーム向けRESTful APIの設計仕様書',
            background: 'モバイルアプリとWebサイトの両方から利用できる統一的なバックエンドAPIが必要',
            goalElements: [
                'ユーザー認証・管理',
                '商品カタログ（検索・フィルタリング機能含む）',
                '買い物かご管理',
                '注文処理',
                '在庫管理',
                '決済連携'
            ],
            sharedImage: '- Shopify APIのような使いやすさ\n- クリーンでシンプルなレスポンス構造\n- 堅牢なエラーハンドリング\n- 詳細なドキュメント',
            workInstructions: [
                'RESTful APIのエンドポイント一覧を作成する',
                '各エンドポイントのリクエスト/レスポンス形式を定義する',
                '認証・認可メカニズムを設計する',
                'レート制限やキャッシュ戦略を提案する',
                'API仕様書のサンプル（OpenAPI/Swaggerフォーマット）を作成する'
            ],
            techSpecs: {
                backend: 'Node.js、NestJS、TypeScript',
                auth: 'OAuth 2.0 + JWT認証',
                performance: 'Redis キャッシュ、CDN',
                monitoring: 'OpenTelemetry、Prometheus'
            },
            uiSpecs: {
                interaction: 'クライアントSDK、RESTful標準に準拠したリソース操作',
                responsive: '適切なページネーション、レスポンスサイズ最適化',
                accessibility: 'PATCHメソッド対応、一貫性のあるエラーレスポンス'
            },
            designSpecs: {
                structure: 'リソース指向設計、階層的エンドポイント構造',
                format: 'JSON/JSONAPIスキーマ、HAL+JSONハイパーメディア',
                versioning: 'URLベースバージョニング（/v1/, /v2/）'
            },
            layoutSpecs: {
                apiStructure: 'リソース→コレクション→アクション階層',
                documentation: 'インタラクティブSwaggerUI、サンプルリクエスト付き'
            },
            constraints: [
                'セキュリティを最優先する（OWASP Top 10対応）',
                'スケーラビリティを考慮した設計',
                'バージョニング戦略を含める',
                'RESTの原則に忠実に従う',
                'JSON形式のレスポンス'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- API設計概要\n- エンドポイント一覧と詳細説明\n- リクエスト/レスポンス例\n- 認証フロー図（テキスト表現）\n- エラーコード体系\n- OpenAPI仕様の一部サンプル',
            style: '技術的に正確で簡潔、参照しやすいドキュメントスタイル',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Database Design Template
    {
        id: 'database-design',
        name: 'データベース設計',
        data: {
            role: 'データベース設計',
            outputImage: '医療記録管理システムのデータベース設計',
            background: '中規模クリニック（医師10名、年間患者数約5000人）向けの電子カルテシステム用データベース',
            goalElements: [
                '患者基本情報',
                '診療履歴・医療記録',
                '処方薬情報',
                '検査結果',
                '予約・来院履歴',
                '医療スタッフ情報',
                '請求・支払い情報'
            ],
            sharedImage: '- 医療データの複雑な関係性を適切に表現\n- 将来の拡張性に備えた柔軟な構造\n- クエリパフォーマンスを重視\n- 医療情報のセキュリティ規制に準拠',
            workInstructions: [
                'エンティティ関連図(ER図)を設計する',
                '各テーブルのスキーマを定義する（主キー、外部キー、インデックス含む）',
                'データ型と制約を適切に設定する',
                '正規化戦略を説明する',
                'パフォーマンス最適化のためのインデックス戦略を提案する',
                'データ整合性を保つための制約を設計する'
            ],
            techSpecs: {
                dbms: 'PostgreSQL 15、TimescaleDB（時系列データ）',
                backupSystem: '増分バックアップ、ポイントインタイムリカバリ',
                encryption: 'TDE（透過的データ暗号化）、列レベル暗号化',
                highAvailability: 'マスター/スレーブレプリケーション、フェイルオーバー'
            },
            uiSpecs: {
                dataAccess: 'ORM抽象化層、ストアドプロシージャ',
                performance: 'クエリパフォーマンスチューニング、実行計画最適化',
                dataIntegrity: '参照整合性制約、トリガー、CHECK制約'
            },
            designSpecs: {
                normalization: '第3正規形（3NF）基本、必要に応じて非正規化',
                dataTypes: '適切なサイズ指定（VARCHAR最適化、数値型選定）',
                partitioning: '患者データの時系列パーティショニング'
            },
            layoutSpecs: {
                schemaOrganization: 'ドメイン別スキーマ分割（患者、スタッフ、請求など）',
                indexStrategy: 'B-tree、GiSTインデックス併用、部分インデックス'
            },
            constraints: [
                'HIPAA等の医療情報保護規制に準拠すること',
                '10年以上のデータ保持を想定した設計',
                '高いデータ整合性の確保',
                '監査証跡（Audit Trail）の実装',
                '複雑な医療コード体系の対応'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- データベース設計概要\n- ER図（テキスト表現）\n- 各テーブルの詳細スキーマ定義\n- リレーションシップの説明\n- インデックス戦略\n- クエリパフォーマンス最適化提案\n- セキュリティ考慮事項',
            style: '技術的に正確で詳細、データベース専門家向けの専門的な説明',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Blog Article Template
    {
        id: 'blog-article',
        name: 'ブログ記事作成',
        data: {
            role: 'テック系ブログライター',
            outputImage: '「マイクロサービスアーキテクチャの実践的導入ガイド」というタイトルのブログ記事',
            background: 'モノリシックアプリケーションからマイクロサービスへの移行を検討している中小企業の技術リーダー向けに、実用的な知識を提供したい',
            goalElements: [
                'マイクロサービスの実際のビジネスメリット',
                '移行の判断基準・適切なタイミング',
                '段階的移行のアプローチと戦略',
                '共通の課題と解決策',
                'コスト/パフォーマンスのトレードオフ',
                '成功事例と失敗事例'
            ],
            sharedImage: '- Martin Fowlerのブログのような深い技術的洞察\n- 具体的なコード例やアーキテクチャ図を含む実践的内容\n- 理論と実践のバランスが取れた内容\n- 経験から得た知見を重視',
            workInstructions: [
                '約2500語の包括的な記事を作成する',
                '小見出しで論理的に構成する',
                '実際の実装例や図解を含める',
                '読者が実際に行動できる具体的なステップを提供する',
                '適切な内部リンクのプレースホルダーを含める'
            ],
            techSpecs: {
                codeExamples: 'Docker、Kubernetes、CircleCI、API Gateway',
                architecture: 'イベント駆動型、サービスメッシュ、コンテナオーケストレーション',
                monitoring: 'Prometheus、Grafana、分散トレーシング',
                deployment: 'CI/CDパイプライン、Blue/Greenデプロイメント'
            },
            uiSpecs: {
                readability: 'スキャナブルなレイアウト、ハイライトボックス',
                engagement: 'コードブロック、ステップバイステップガイド付き',
                navigation: '目次、アンカーリンク、関連記事参照'
            },
            designSpecs: {
                typography: '読みやすさ重視、コードブロック用等幅フォント',
                visual: 'アーキテクチャ図、マインドマップ、フロー図',
                branding: 'サイトデザインに合わせたカラースキーム'
            },
            layoutSpecs: {
                structure: '導入→本文（問題提起→解決策）→まとめ→参考資料',
                contentFlow: 'ステップアップ方式の情報提供、実践セクション区分け'
            },
            constraints: [
                '特定のクラウドベンダーや技術に偏らない中立的な視点',
                'マーケティング的な表現は避け、技術的に正確な内容',
                '初心者向けの基本説明は最小限に抑え、中級〜上級者向け',
                '短期的なトレンドではなく、長期的に有効な戦略に焦点'
            ],
            outputFormat: 'HTML形式で、以下を含める:\n- 魅力的な導入部\n- 構造化された見出し（H2, H3）\n- コードスニペット（適切なシンタックスハイライト用のHTMLクラス付き）\n- 箇条書きや番号付きリストの適切な使用\n- まとめと次のステップ',
            style: 'プロフェッショナルながらも親しみやすい口調。学術論文ほど固くなく、カジュアルブログほど砕けていない、技術専門家間の会話のような調子。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Technical Documentation Template
    {
        id: 'tech-doc',
        name: '技術ドキュメント作成',
        data: {
            role: '技術ドキュメント作成',
            outputImage: 'オンボーディングドキュメント：「GraphQLバックエンド開発者向け開発環境セットアップガイド」',
            background: '新しく入社した開発者が、当社のGraphQLバックエンド開発環境をスムーズにセットアップし、1日目から開発を始められるようにするため',
            goalElements: [
                '必要な開発ツールとバージョン',
                '環境変数の設定方法',
                'ローカル開発環境のセットアップ手順',
                'データベース初期化と接続設定',
                '認証システムの設定',
                'テストデータの投入方法',
                'よくあるトラブルシューティング',
                'コーディング規約とプロジェクト構造の説明'
            ],
            sharedImage: '- GitHubのドキュメントのようなクリアで段階的な説明\n- コマンドラインの入力と出力例を含む実用的な内容\n- 視覚的な要素（ターミナル出力、設定ファイル例など）\n- 初日の開発者でも迷わない明確さ',
            workInstructions: [
                '段階的なセットアップ手順を作成する',
                '各ステップに期待される結果と検証方法を含める',
                '環境ごと（Windows/Mac/Linux）の違いを明記する',
                'トラブルシューティングセクションを充実させる',
                'チェックリスト形式の要約を含める'
            ],
            techSpecs: {
                stack: 'Node.js v16以上、GraphQL、Apollo Server、TypeScript',
                database: 'PostgreSQL 13以上、TypeORM',
                devTools: 'Docker、Docker Compose、Git、VS Code、ESLint',
                testing: 'Jest、SuperTest、GraphQL Playground'
            },
            uiSpecs: {
                documentation: 'マークダウン形式、VS Codeプレビュー互換',
                navigation: 'アンカーリンク、目次、検索可能なインデックス',
                examples: 'ターミナルセッションのコピペ可能なコマンド'
            },
            designSpecs: {
                layout: '段階的手順、番号付きリスト、チェックリスト',
                codeBlocks: '構文ハイライト、コピーボタン付き',
                callouts: '注意点・重要事項の強調表示'
            },
            layoutSpecs: {
                structure: '前提条件→基本セットアップ→詳細設定→検証→トラブルシューティング',
                progression: '各セクションの依存関係と流れを明確に示す'
            },
            constraints: [
                '技術的に正確であること（Node.js v16以上、PostgreSQL 13以上を使用）',
                '開発者が前提知識（Git, Node.js, SQL基礎）を持っていることを前提',
                '社内ネットワーク特有の設定を含める',
                'セキュリティ上の重要事項を強調する',
                '定期的な更新が容易な構造にする'
            ],
            outputFormat: 'Markdown形式で、以下の構造に従う:\n- 目次\n- 前提条件と概要\n- 段階別セットアップ手順（番号付きリスト）\n- コマンドラインスニペット（```で囲む）\n- 設定ファイル例（```で囲む）\n- トラブルシューティング（Q&A形式）\n- 追加リソースとリファレンス\n- セットアップ完了チェックリスト',
            style: '明確で簡潔、指示的。冗長な説明を避け、必要な情報を直接的に提供。技術的に正確でありながら、初日の開発者にも理解しやすい表現。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Programming Education Template
    {
        id: 'prog-education',
        name: 'プログラミング教育',
        data: {
            role: 'プログラミング教育',
            outputImage: '「JavaScriptを使った非同期プログラミング入門」という対話型チュートリアル',
            background: '基本的なJavaScript知識はあるが、Promiseやasync/awaitの概念に苦戦している初級〜中級プログラマーに、実践的な理解を提供したい',
            goalElements: [
                '同期vs非同期の基本概念',
                'コールバックの仕組みと問題点',
                'Promiseの基本と使い方',
                'async/await構文の実用的な使用法',
                '一般的なエラーハンドリングパターン',
                '並列処理と直列処理の実装',
                '実際のAPIリクエスト処理'
            ],
            sharedImage: '- freeCodeCampのような段階的で実践的なアプローチ\n- MDNのような正確さとJavaScriptのベストプラクティス準拠\n- 各概念を視覚的に説明する図解やアニメーションの概念\n- コードと説明のバランスが良い構成',
            workInstructions: [
                '段階的に難易度が上がる5つのレッスンを作成する',
                '各レッスンに概念説明、コード例、練習問題を含める',
                'すぐに試せるコードスニペットを提供する',
                '複数の実用的なシナリオでの応用例を示す',
                '学習者が理解しづらい部分の補足説明を用意する'
            ],
            techSpecs: {
                language: 'JavaScript ES2022、Node.js 18.x',
                concepts: 'Promise、async/await、fetch API、AbortController',
                tools: 'ブラウザコンソール、Node.js REPL、CodeSandbox',
                libraries: 'Axios（例示用）、node-fetch'
            },
            uiSpecs: {
                interactivity: 'ライブコードエディタ、実行結果表示',
                progression: '段階的なコンセプト導入、スモールステップ',
                reinforcement: '練習問題、自己チェック問題、解答例'
            },
            designSpecs: {
                structure: 'コードブロック強調、キーコンセプトハイライト',
                visualization: '非同期処理フロー図、イベントループ図解',
                comparison: 'パターン別コード比較表、ベストプラクティス'
            },
            layoutSpecs: {
                lessonStructure: '概念説明→コード例→解説→練習→応用',
                navigation: 'レッスン間の自然な流れ、前提知識リンク'
            },
            constraints: [
                'ECMAScript 2022以降の最新文法を使用',
                'Node.jsとブラウザ環境の両方に適用できる例を含める',
                '複雑な外部ライブラリには依存しない',
                '実務で実際に使えるパターンに焦点を当てる',
                '初心者が混乱しやすい落とし穴を明示的に指摘する'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- レッスン概要と学習目標\n- 概念説明（図の概念的説明を含む）\n- 実行可能なコード例（```javascript で囲む）\n- ステップバイステップの解説\n- 練習問題と解答例\n- 発展課題と追加リソース',
            style: 'フレンドリーで励ましながらも、技術的に正確。専門用語を使いつつも、初学者にも理解できるよう補足説明を適宜挟む。「なぜそうなるのか」の原理説明を重視。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // System Development Template
    {
        id: 'system-dev',
        name: 'システム開発',
        data: {
            role: 'システムアーキテクト',
            outputImage: '企業向け在庫管理システムの要件定義書とアーキテクチャ設計書',
            background: '複数の倉庫と店舗を持つ中規模小売企業（年商50億円規模）のレガシーな在庫管理システムを刷新し、リアルタイム性と正確性を向上させたい',
            goalElements: [
                'リアルタイム在庫管理（複数拠点間での在庫同期）',
                '発注自動化システム（在庫閾値に基づく発注）',
                'バーコード/QRコードスキャンによる入出荷管理',
                '売上予測に基づく在庫最適化',
                '各種業務レポート（在庫状況、発注履歴、入出荷履歴など）',
                '既存ERPシステムとの連携機能',
                'モバイルデバイス対応のUI'
            ],
            sharedImage: '- エンタープライズシステムとしての堅牢性と拡張性\n- 業務効率を最大化するシンプルで直感的なUI/UX\n- マイクロサービスアーキテクチャによる保守性の向上\n- デバイス非依存のクロスプラットフォーム対応',
            workInstructions: [
                'システム要件の詳細分析と整理を行う',
                'システムアーキテクチャの全体像を設計する',
                '各コンポーネントの役割と連携方法を定義する',
                'データモデルと主要データフローを設計する',
                '非機能要件（性能、セキュリティ、可用性など）を定義する',
                '段階的な開発・移行計画を提案する'
            ],
            techSpecs: {
                architecture: 'マイクロサービス、イベント駆動型、CQRS',
                backend: 'Java/Spring Boot、.NET Core、メッセージキュー',
                frontend: 'React、PWA対応、バーコードスキャナー連携',
                database: 'PostgreSQL（トランザクション）、ElasticSearch（検索）'
            },
            uiSpecs: {
                userExperience: '業務効率最優先、ショートカットキー多用',
                devices: 'デスクトップ、タブレット、ハンドヘルドスキャナー',
                accessibility: '倉庫環境での視認性、タッチ操作最適化'
            },
            designSpecs: {
                dashboard: 'KPI可視化、アラート管理、ステータス表示',
                workflow: 'プロセス指向UI、ウィザード形式入力',
                customization: '役割ベースのUI調整、カスタムレポート'
            },
            layoutSpecs: {
                navigation: 'トップナビ（メイン機能）、サイドナビ（詳細機能）',
                mainViews: '在庫一覧、拠点別状況、発注管理、レポート'
            },
            constraints: [
                '既存システムからの移行を考慮した設計（データ変換、並行運用計画など）',
                'オフライン環境でも最低限の機能が動作することを保証する',
                'セキュリティとデータ整合性を最優先事項とする',
                '導入・運用コストを抑えるためクラウドサービスを積極活用する',
                '将来的な事業拡大（店舗・倉庫の増加）に対応できる拡張性を確保する'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- エグゼクティブサマリー\n- 現状分析と課題整理\n- 提案システムの概要（システム構成図を含む）\n- 機能要件の詳細\n- 非機能要件の詳細\n- システムアーキテクチャの詳細設計\n- データモデル（ER図またはクラス図）\n- 開発・移行ロードマップ\n- リスク分析と対策',
            style: '論理的で体系的、ビジネス価値と技術的実現性のバランスを取った説明。経営層と技術チームの両方が理解できる表現で、専門用語を使用する場合は必要に応じて解説を付ける。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Advanced Web Application Template
    {
        id: 'advanced-web-app',
        name: 'ウェブアプリケーション（高度版）',
        data: {
            role: 'シニアフルスタック開発者',
            outputImage: 'SaaS型プロジェクト管理ツールの設計と主要機能の実装コード',
            background: 'スタートアップ企業向けに、シンプルで使いやすく、かつ拡張性の高いプロジェクト管理ツールを開発したい。Trelloの使いやすさとJiraの機能性を兼ね備えたSaaSプロダクト。',
            goalElements: [
                'カンバンボード（ドラッグ&ドロップ対応）',
                'スプリント/マイルストーン管理',
                'チーム協業機能（コメント、メンション、通知）',
                'タイムトラッキングと進捗管理',
                'カスタムワークフロー設定',
                'レポート機能（バーンダウンチャートなど）',
                'API連携（Slack, GitHub, GitLabなど）',
                'ロールベースのアクセス制御'
            ],
            sharedImage: '- モダンでクリーンなUIデザイン\n- パフォーマンスを重視した高速なレスポンス\n- プログレッシブウェブアプリ（PWA）対応\n- 直感的なUXで学習コストを最小化\n- Linear.appやNotion風のミニマルで洗練されたデザイン',
            workInstructions: [
                'フロントエンド・バックエンドのアーキテクチャを設計する',
                '最適な技術スタックを選定し、理由を説明する',
                'データモデルと主要APIエンドポイントを設計する',
                'カンバンボードのドラッグ&ドロップ実装のサンプルコードを作成する',
                'リアルタイム更新機能の実装方法を提案する',
                'スケーラビリティを考慮したデータベース設計を行う',
                'CIパイプラインとデプロイ戦略を設計する'
            ],
            techSpecs: {
                frontend: 'React/TypeScript、TailwindCSS、React Query',
                backend: 'Node.js、NestJS、WebSocket/Socket.IO',
                database: 'PostgreSQL（主データ）、Redis（キャッシュ、リアルタイム）',
                devops: 'Docker、GitHub Actions、AWS/GCP'
            },
            uiSpecs: {
                interaction: 'ドラッグ&ドロップ、インライン編集、リアルタイム更新',
                responsive: 'デスクトップ優先だがモバイル対応、PWA',
                accessibility: 'キーボードナビゲーション、ARIA対応、高コントラスト'
            },
            designSpecs: {
                theme: 'ライト/ダークモード、カスタムカラーテーマ',
                components: 'Atomic Design原則に基づくコンポーネント構成',
                animations: '効果的なモーショントランジション、骨格ローディング'
            },
            layoutSpecs: {
                structure: 'サイドナビ、トップバー、メインコンテンツエリア',
                organization: '階層化されたプロジェクト/ボード/タスク構造'
            },
            constraints: [
                'フロントエンドはReact/TypeScriptを使用すること',
                'バックエンドはNode.js（NestJSまたはExpress）を使用すること',
                'リアルタイム機能のためにSocket.IOまたはWebSocketを実装すること',
                'コードの品質管理にESLint, Prettier, Jestを導入すること',
                'マルチテナントアーキテクチャを採用すること',
                'セキュリティに関するOWASP Top 10に対応すること',
                'パフォーマンスの目標：初期ロード時間1秒以内、API応答時間100ms以内'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- アーキテクチャ概要図\n- 技術スタックの詳細と選定理由\n- データモデル（ER図）\n- API設計（RESTful原則に基づく）\n- 主要コンポーネントの実装サンプルコード\n- フロントエンドのステート管理戦略\n- スケーラビリティと性能最適化戦略\n- セキュリティ考慮事項\n- テスト戦略\n- デプロイメントパイプライン',
            style: '技術的に深い知見を示しつつ、実践的でコード例を交えた説明。最新のベストプラクティスを反映させ、各設計判断の背景にある理由を明確に説明する。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Static Website Template
    {
        id: 'static-website',
        name: '静的Webサイト',
        data: {
            role: 'フロントエンド開発者/Webデザイナー',
            outputImage: '企業のコーポレートサイトのデザインと実装コード',
            background: 'スタートアップ企業（SaaS開発）のブランドイメージを確立し、製品紹介と問い合わせ獲得を目的としたコーポレートサイトを制作したい',
            goalElements: [
                'ヒーローセクション（企業ビジョンと製品ハイライト）',
                '製品特徴紹介（3-4の主要機能説明）',
                '料金プラン比較表',
                '顧客事例/推薦文',
                'チーム紹介',
                'ブログセクション（最新記事3件表示）',
                'お問い合わせフォーム',
                'ニュースレター登録セクション'
            ],
            sharedImage: '- モダンでミニマルなデザイン\n- 高品質な写真と洗練されたイラスト\n- 適切な余白を使った読みやすいレイアウト\n- 滑らかなスクロールアニメーション\n- Stripeのウェブサイトのような洗練された印象\n- ダークモード対応',
            workInstructions: [
                'サイト全体のワイヤーフレームを作成する',
                'レスポンシブデザインのHTMLおよびCSSコードを実装する',
                'パフォーマンスを最適化するための戦略を提案する',
                'SEO対策を組み込む',
                'アクセシビリティ要件を満たす実装を行う',
                'お問い合わせフォームの実装（バリデーションを含む）',
                'アニメーションの実装案を提示する'
            ],
            techSpecs: {
                framework: 'Next.js 14、App Router、React 18+',
                styling: 'TailwindCSS、CSS Modules、Framer Motion',
                build: 'webpack、静的サイト生成（SSG）優先',
                optimizations: '画像最適化、コード分割、レイジーローディング'
            },
            uiSpecs: {
                interactivity: '滑らかなスクロールエフェクト、ホバーアニメーション',
                responsive: 'モバイルファースト、ブレイクポイント最適化',
                forms: 'インラインバリデーション、フィードバック、アクセシブル'
            },
            designSpecs: {
                typography: 'Noto Sans JP、Inter、読みやすさ重視のタイポグラフィ',
                colors: 'ブランドカラー+モノクロ基調、高コントラスト',
                components: 'シャドウ、角丸、微妙なグラデーション'
            },
            layoutSpecs: {
                structure: 'ナビゲーション（固定）、メインセクション、フッター',
                sections: 'フルスクリーンセクション、グリッドレイアウト'
            },
            constraints: [
                'HTML5、CSS3、JavaScript（ES6+）を使用すること',
                'フレームワークはNext.jsを使用すること',
                'CSSフレームワークはTailwind CSSを使用すること',
                'ページ読み込み速度はLighthouseスコア90以上を目指す',
                'すべてのページでWCAG 2.1 AAレベルのアクセシビリティに準拠すること',
                '主要ブラウザ（Chrome、Firefox、Safari、Edge）での互換性を確保すること',
                'モバイルファーストの設計思想で実装すること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- サイト構造と各セクションの概要\n- デザインコンセプトの説明\n- 主要セクションのHTMLおよびCSSコード例\n- レスポンシブデザインの対応方針\n- アニメーション実装例（CSS/JS）\n- パフォーマンス最適化戦略\n- SEO対策実装詳細\n- アクセシビリティ対応詳細\n- 実装およびデプロイ手順',
            style: 'デザインの意図と技術的実装の両方をバランス良く説明。視覚的な要素の重要性を強調しつつ、技術的な堅牢性も示す表現。コード例は簡潔で理解しやすいものにする。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Web Design Template
    {
        id: 'web-design',
        name: 'Webデザイン',
        data: {
            role: 'UIUXデザイナー',
            outputImage: 'フィットネスアプリのUIデザインと主要画面のモックアップ',
            background: '健康意識の高い30-45歳をターゲットとした、運動習慣の形成と維持を支援するフィットネスアプリのUIUXデザインを作成したい',
            goalElements: [
                'ユーザーダッシュボード（進捗概要、カレンダー、次のワークアウト）',
                'ワークアウトライブラリ（カテゴリ別検索、難易度フィルター）',
                'ワークアウト詳細画面（動画、手順説明、タイマー）',
                '進捗トラッキング画面（グラフ、統計）',
                'コミュニティ機能（友人との共有、チャレンジ）',
                'プロフィール設定画面',
                'お気に入り・カスタムワークアウト作成機能'
            ],
            sharedImage: '- Appleの人間インターフェイスガイドラインとMaterial Designの原則に準拠\n- アクセシビリティに配慮した色とフォントサイズ\n- モチベーションを高める視覚的フィードバック\n- 直感的なナビゲーション構造\n- Fitbitアプリや Nike Training Clubのような洗練された体験',
            workInstructions: [
                'ブランドカラーパレットとタイポグラフィを定義する',
                'ユーザージャーニーとワイヤーフレームを作成する',
                '主要8画面の高忠実度モックアップを作成する',
                'UIコンポーネントライブラリを設計する',
                'インタラクションデザイン（アニメーション、遷移）を定義する',
                'レスポンシブデザインのガイドラインを作成する',
                'ユーザビリティテストのためのプロトタイプ案を提案する'
            ],
            techSpecs: {
                designTools: 'Figma、Principle（アニメーション）',
                implementation: 'React Native対応デザイン、iOS/Android対応',
                handoff: 'デザイン→開発の円滑な引き継ぎ方法、アセット生成',
                testing: 'ユーザビリティテスト計画、プロトタイプ方法'
            },
            uiSpecs: {
                interaction: 'タップ、スワイプ、ジェスチャー定義、触覚フィードバック',
                responsive: 'iPhone/Android主要サイズ最適化、タブレット対応',
                usability: '片手操作対応、運動中でも操作しやすいUI'
            },
            designSpecs: {
                typography: 'サンセリフ主体、十分な行間、階層的な見出し構造',
                colors: '活力を感じるアクセントカラー、十分なコントラスト比',
                iconography: '一貫したアイコンスタイル、視認性の高いシンボル'
            },
            layoutSpecs: {
                navigation: 'タブバー（主要機能）、サイドメニュー（設定等）',
                screens: 'コンテンツ密度の最適化、運動中の視認性考慮'
            },
            constraints: [
                'Appleの人間インターフェイスガイドラインとMaterial Designの原則に準拠すること',
                'アクセシビリティ（色のコントラスト、フォントサイズ、タッチターゲットサイズ）に配慮すること',
                '初心者にも直感的に使いやすいUIにすること',
                'ダークモードとライトモード両方に対応すること',
                'アプリのパフォーマンスを考慮した軽量なデザイン要素を使用すること',
                'ブランドの一貫性を保ちつつ、魅力的で差別化されたデザインにすること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- デザインコンセプトの説明\n- ブランドカラーパレット（HEX値）とタイポグラフィの定義\n- 主要UIコンポーネントのビジュアルスタイル（ボタン、カード、ナビゲーション要素など）\n- 主要8画面のモックアップ詳細説明\n- インタラクションデザインの詳細（アニメーション、遷移の説明）\n- レスポンシブデザインの対応方針\n- デザイン決定の根拠',
            style: '視覚的要素の重要性を強調しつつ、使いやすさとユーザー体験の論理的根拠を示す。デザイン専門用語と一般的な説明のバランスを取り、クライアントおよび開発者の両方に理解しやすい表現を用いる。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Desktop Application Template
    {
        id: 'desktop-app',
        name: 'デスクトップアプリ',
        data: {
            role: 'デスクトップアプリケーション開発者',
            outputImage: '動画編集ソフトウェアの設計と主要機能の実装コード',
            background: 'YouTuberやコンテンツクリエイター向けの、使いやすく高機能な動画編集デスクトップアプリケーションを開発したい。AdobeのようなプロツールとiMovieのような初心者向けツールの中間に位置づけるソフトウェア。',
            goalElements: [
                'マルチトラックタイムライン編集',
                'ビデオ/オーディオエフェクトライブラリ',
                'テキスト/タイトル挿入機能',
                'トランジション効果',
                'カラーグレーディングツール',
                'オーディオミキシング機能',
                '書き出し（複数フォーマット対応）',
                'プロジェクト管理システム',
                'クラウド連携（素材共有）'
            ],
            sharedImage: '- Final CutとPremiere Proの間の位置づけ\n- モダンでフラットなインターフェース\n- ダークテーマベースのUI\n- 主要機能へのアクセスが容易\n- パフォーマンスを重視した設計\n- 初心者モードと上級者モードの切り替え機能',
            workInstructions: [
                'アプリケーションのアーキテクチャを設計する',
                '最適な技術スタックを選定し、理由を説明する',
                'UIレイアウトとコンポーネント設計を行う',
                'タイムライン編集機能の実装方法を詳細化する',
                'エフェクト処理のパフォーマンス最適化戦略を提案する',
                'データモデルとファイル形式を設計する',
                'マルチプラットフォーム対応の実装戦略を提案する'
            ],
            techSpecs: {
                framework: 'Electron、React/TypeScript（UI）',
                videoProcessing: 'FFmpeg、WebAssembly、GPU加速',
                architecture: 'モジュラー設計、プラグインシステム',
                storage: 'SQLite（メタデータ）、ファイルベース（メディア）'
            },
            uiSpecs: {
                layout: 'マルチパネル（タイムライン、プレビュー、ライブラリ）',
                controls: 'カスタマイズ可能なショートカット、スクラブ操作',
                feedback: 'リアルタイムプレビュー、プログレスインジケーター'
            },
            designSpecs: {
                theme: 'ダークテーマ主体、コントラスト調整可能',
                components: 'カスタムUI要素、直感的なドラッグ&ドロップ',
                workflow: 'コンテキスト依存メニュー、スマートツールパネル'
            },
            layoutSpecs: {
                windows: 'ドッキング可能なパネル、マルチモニター対応',
                organization: 'メディアブラウザ、エフェクトパネル、プロパティ'
            },
            constraints: [
                'Windows、macOS両対応のクロスプラットフォーム実装であること',
                'GPUアクセラレーションを最大限活用すること',
                'メモリ使用量を最適化し、大きなプロジェクトでも安定動作すること',
                'プラグインシステムによる拡張性を確保すること',
                '最新のコーデック（H.265、ProRes、AV1など）に対応すること',
                'クラッシュからの自動復旧機能を実装すること',
                'オフライン環境でも全機能が使用可能であること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- アーキテクチャ概要図\n- 技術スタックの詳細と選定理由\n- UIレイアウトとコンポーネント設計\n- タイムライン編集機能の実装概要（コード例含む）\n- データモデルとファイル形式の設計\n- パフォーマンス最適化戦略\n- マルチプラットフォーム実装アプローチ\n- プラグインシステムの設計\n- テスト戦略\n- 開発ロードマップ',
            style: '技術的深さと実用性のバランスを取った説明。パフォーマンスと拡張性に関する考慮事項を詳細に説明し、各設計判断の背景にある理由を明確に述べる。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Mobile Application Template
    {
        id: 'mobile-app',
        name: 'スマホアプリ',
        data: {
            role: 'モバイルアプリ開発者',
            outputImage: '料理レシピ共有アプリの設計と主要画面の実装コード',
            background: '食事管理と料理スキル向上を目指す20-40代向けの、レシピ共有とソーシャル機能を備えたモバイルアプリを開発したい',
            goalElements: [
                'レシピ検索・ブラウズ機能（カテゴリ、食材、調理時間などでフィルタリング）',
                'レシピ詳細表示（材料、手順、栄養情報、調理時間）',
                'レシピ投稿・編集機能（写真追加、材料リスト、手順書き込み）',
                'ソーシャル機能（いいね、コメント、フォロー）',
                'お気に入り・コレクション作成機能',
                '買い物リスト生成機能',
                '食事計画カレンダー',
                'プロフィール管理',
                'プッシュ通知（新着レシピ、コメント）'
            ],
            sharedImage: '- クリーンでモダンなデザイン\n- 高品質な食品写真が映える明るいレイアウト\n- 操作性を重視したシンプルなナビゲーション\n- 料理中に参照しやすいレシピ表示\n- Pinteresetとinstagramの要素を組み合わせたような視覚的体験',
            workInstructions: [
                'アプリアーキテクチャを設計する（ネイティブかクロスプラットフォームか、その理由）',
                'データモデルとAPIインターフェースを設計する',
                '主要画面のUIデザインとナビゲーションフローを作成する',
                'オフライン対応と同期メカニズムを設計する',
                'レシピ検索機能の実装方法を詳細化する',
                'ソーシャル機能のデータフローを設計する',
                'パフォーマンスとバッテリー使用効率の最適化戦略を提案する'
            ],
            techSpecs: {
                platform: 'React Native（クロスプラットフォーム）',
                state: 'Redux Toolkit、React Query（データフェッチ）',
                backend: 'Firebase（認証、DB、ストレージ、通知）',
                native: 'カメラ、プッシュ通知、ディープリンク対応'
            },
            uiSpecs: {
                navigation: 'タブベース、ネスト化されたスタックナビゲーション',
                offline: 'オフラインファースト設計、バックグラウンド同期',
                performance: 'リスト仮想化、画像最適化、メモ化'
            },
            designSpecs: {
                visual: '高品質な料理写真、マットスタイルUI要素',
                typography: '可読性重視、十分なコントラスト',
                animations: '適切なトランジション、フィードバックアニメーション'
            },
            layoutSpecs: {
                screens: 'グリッドレイアウト（検索）、リスト表示（詳細）',
                components: 'カード型UI、フローティングアクションボタン'
            },
            constraints: [
                'iOS、Android両プラットフォームに対応すること',
                'オフライン状態でも基本機能が使用可能であること',
                'レシピ画像の効率的な読み込みとキャッシュを実装すること',
                'ユーザー生成コンテンツに対するモデレーション機能を組み込むこと',
                'プライバシー設定（公開/非公開レシピ、プロフィル情報）を実装すること',
                'アクセシビリティガイドラインに準拠すること',
                'バッテリー消費を最小限に抑える実装を心がけること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- アプリアーキテクチャ概要\n- 技術スタックの選定理由\n- データモデルとAPI設計\n- 主要画面のUI設計と画面遷移図\n- 主要機能の実装コード例（レシピ検索、詳細表示など）\n- ネットワーク通信とオフラインキャッシュ戦略\n- パフォーマンス最適化アプローチ\n- セキュリティとプライバシー考慮事項\n- テスト戦略\n- リリースとモニタリング計画',
            style: 'ユーザー体験を重視しつつ技術的実装の詳細も説明する。視覚的要素とパフォーマンスのバランスについての考慮事項を明確に述べ、モバイル固有の制約（バッテリー、ネットワーク状態、画面サイズ）への対応策を強調する。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Modern Web Application Template
    {
        id: 'modern-web-app',
        name: 'モダンなWebアプリ',
        data: {
            role: 'Reactフロントエンド開発者',
            outputImage: 'モダンで直感的なReactベースのWebアプリケーション',
            background: '洗練されたデザインと高いユーザビリティを提供する、Reactを使用したプロフェッショナルなWebアプリケーションを開発したい',
            goalElements: [
                'モダンでクリーンなUI/UXデザイン',
                'レスポンシブでモバイル対応のレイアウト',
                'フォームおよびユーザー認証機能',
                'データ取得と表示のための効率的な仕組み',
                'パフォーマンス最適化',
                'アクセシビリティ対応',
                'ダークモード対応'
            ],
            sharedImage: '- Google Fontsの Noto Sans JPとPoppinsを組み合わせたタイポグラフィ\n- グラデーションを活用した落ち着いた印象のブルーまたはダークモード対応\n- ホワイト背景（bg-white shadow-lg rounded-2xl）＋ モダンなボーダーレスデザイン\n- メインカラー：ブルー系 (bg-blue-500 hover:bg-blue-600)、サブカラー：グレー系 (bg-gray-200)\n- Framer Motionを使用したスムーズなアニメーション',
            workInstructions: [
                'アプリケーションの基本構造とコンポーネント設計を行う',
                'TailwindCSSを使用したUIデザインを実装する',
                'React Hooks（useState, useEffect, useContext）を活用した状態管理を実装する',
                'フォームバリデーション（React Hook Form + Yup）を実装する',
                'データ取得のためのカスタムフックを作成する',
                'レスポンシブデザインを実装する',
                'コンポーネントライブラリを設計する',
                'パフォーマンス最適化戦略（React.memo, useCallback, useMemo）を適用する'
            ],
            techSpecs: {
                frontend: 'React 18+、TypeScript 5.x',
                styling: 'TailwindCSS 3.x、Styled Components（必要に応じて）',
                stateMgmt: 'React Query（データフェッチ）、Zustand/Jotai（状態管理）',
                performance: 'コード分割、メモ化、仮想化リスト'
            },
            uiSpecs: {
                components: 'アトミックデザイン、再利用可能コンポーネント',
                responsiveness: 'モバイルファースト、フレックスボックス/グリッド',
                animation: 'Framer Motion、CSSトランジション'
            },
            designSpecs: {
                typography: 'Noto Sans JP（日本語）、Poppins（英数字）',
                colors: 'カラートークン、セマンティックカラー、ダークモード変数',
                spacing: 'TailwindCSSスペーシングシステム、一貫した余白'
            },
            layoutSpecs: {
                structure: 'ヘッダー（固定）、サイドナビ（必要に応じて）、メインコンテンツ',
                grid: 'フレックスボックス/CSSグリッド、レスポンシブコンテナ'
            },
            constraints: [
                'React 18+を使用すること',
                'TailwindCSSを活用したスタイリングを行うこと',
                'React Hook FormとYupでフォームバリデーションを実装すること',
                'Framer Motionでアニメーションを実装すること',
                'APIデータ取得にはAxiosまたはFetch APIを使用すること',
                'React RouterでSPA実装を行うこと',
                'ダークモード対応（darkMode: class）を実装すること',
                'アクセシビリティ（ARIA属性、キーボード操作）に配慮すること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- プロジェクト構造とコンポーネント設計の説明\n- UIデザインコンセプトとTailwindCSS設定\n- 主要コンポーネントの実装コード例\n- 状態管理とデータフローの説明\n- フォーム実装とバリデーション方法\n- パフォーマンス最適化テクニック\n- レスポンシブデザイン実装の詳細\n- アクセシビリティ対応の詳細\n- ダークモード実装方法\n- 推奨開発環境と実行手順',
            style: '技術的に正確でありつつ、実装上の判断理由を明確に説明する。最新のReactベストプラクティスを強調し、コード例はシンプルかつ教育的にする。開発者が直接参考にできる実践的なガイド形式で記述する。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Trading Application Template
    {
        id: 'trading-app',
        name: 'トレード管理アプリ',
        data: {
            role: '金融アプリケーション開発者',
            outputImage: 'トレード記録・分析用Webアプリケーションの設計と実装コード',
            background: '個人投資家向けのトレード記録、分析、パフォーマンス評価を行うためのアプリケーションを開発したい。使いやすく、データ可視化に優れたツール。',
            goalElements: [
                'トレード記録機能（取引履歴の入力、編集、削除）',
                'パフォーマンス分析（利益/損失統計、勝率、平均リターン）',
                'ポートフォリオ可視化（資産配分、セクター分布）',
                'チャート機能（価格チャート、パフォーマンスチャート）',
                'トレードジャーナル（メモ、振り返り記録）',
                'レポート生成（日次/週次/月次/年次）',
                'リスク分析（ドローダウン、シャープレシオ）',
                'データエクスポート/インポート機能'
            ],
            sharedImage: '- Trading Viewのような機能的なチャート表示\n- クリーンでプロフェッショナルなダッシュボード\n- データ重視の明確なレイアウト\n- ダークテーマをベースとした目に優しいUI\n- モバイル対応でいつでもトレード記録が可能',
            workInstructions: [
                'アプリケーションのアーキテクチャを設計する',
                'データモデルとストレージ戦略を定義する',
                'チャート実装のためのライブラリを選定し実装例を提示する',
                'トレード入力フォームとバリデーションを設計する',
                'パフォーマンス計算のアルゴリズムを設計する',
                'ダッシュボードレイアウトとUIコンポーネントを設計する',
                'データのインポート/エクスポート機能を実装する'
            ],
            techSpecs: {
                frontend: 'React/TypeScript、Chart.js/Recharts',
                storage: 'IndexedDB、ローカルストレージ、オプショナルクラウド同期',
                dataProcessing: 'データ集計・分析ライブラリ、財務計算関数',
                optimization: 'メモ化、仮想化リスト、チャートパフォーマンス最適化'
            },
            uiSpecs: {
                dashboard: '概要統計、最近のトレード、主要KPI',
                charts: 'ローソク足チャート、パフォーマンスライン、分布図',
                forms: '効率的なトレード入力、テンプレート、バッチ入力'
            },
            designSpecs: {
                theme: 'ダークテーマ基調、読みやすさ重視',
                numbers: '明確な数値表示、色分けされた損益表示',
                tables: 'ソート可能な取引履歴、フィルタリング機能'
            },
            layoutSpecs: {
                structure: 'サイドナビ、メインダッシュボード、トレード詳細',
                organization: 'タブ型インターフェース、コンテキストメニュー'
            },
            constraints: [
                'オフライン対応でローカルでデータを保存できること',
                '大量のトレードデータでもパフォーマンスが低下しないこと',
                'プライバシーとデータセキュリティを重視すること',
                'ブラウザ互換性を確保すること（Chrome、Firefox、Safari、Edge）',
                'トレード戦略のルールに基づいたアラート機能を実装すること',
                'データバックアップ機能を提供すること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- アプリケーションアーキテクチャの概要\n- データモデルと保存戦略\n- 主要画面のUIデザインとコンポーネント構成\n- チャート実装のサンプルコード\n- パフォーマンス計算のアルゴリズム詳細\n- データ管理（インポート/エクスポート/バックアップ）方法\n- レスポンシブ対応の実装詳細\n- テスト戦略と品質保証方法',
            style: '金融データの正確性を重視しつつ、技術的実装の詳細も明確に説明する。チャートやデータ可視化に関する知見を示し、パフォーマンスとUXのバランスについての考慮点を明示する。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Educational Content Template
    {
        id: 'educational-content',
        name: '教育コンテンツ',
        data: {
            role: 'IT教育コンテンツ開発者',
            outputImage: 'プログラミング初心者向けのインタラクティブ学習コース',
            background: 'IT未経験者や業務効率化を目指す一般ビジネスパーソンに向けた、実践的なプログラミング入門コースを開発したい',
            goalElements: [
                '基本概念の明確な説明（変数、条件分岐、ループなど）',
                '段階的な学習パス（簡単な例から実践的な例へ）',
                'インタラクティブな練習問題とフィードバック',
                '実務で使える具体的なミニプロジェクト',
                '視覚的な概念説明（図解、フローチャート）',
                '復習と知識定着のための確認テスト',
                'トラブルシューティングのガイダンス',
                '継続学習のためのリソース案内'
            ],
            sharedImage: '- Codecademyのようなステップバイステップのアプローチ\n- freeCodeCampの実践的なプロジェクト形式\n- Duolingoのようなゲーミフィケーション要素\n- 明快で読みやすい説明と豊富な例\n- 実務に近い実践的な内容',
            workInstructions: [
                'カリキュラム全体の構造と学習目標を設計する',
                '各レッスンの詳細内容と例題を作成する',
                '理解度チェックのための演習問題を開発する',
                '視覚的な教材（図解、チャート）を設計する',
                '実践的なミニプロジェクトの仕様を定義する',
                '学習者のつまずきやすいポイントの解説を作成する',
                '継続学習のためのリソースリストを編集する'
            ],
            techSpecs: {
                languages: 'JavaScript/Python（初心者向け）',
                platform: 'Web対応学習プラットフォーム、モバイル対応',
                interactive: 'インラインコードエディタ、即時フィードバック',
                assessment: '自動採点システム、進捗トラッキング'
            },
            uiSpecs: {
                navigation: '明確な学習パス、進捗表示',
                interaction: 'コード入力、実行結果表示、ヒント機能',
                feedback: '即時評価、エラー説明、成功メッセージ'
            },
            designSpecs: {
                layout: 'クリーンで集中しやすいレイアウト',
                visuals: '概念を明確にする図解、フローチャート',
                typography: '読みやすさを重視したフォント選定'
            },
            layoutSpecs: {
                lessonStructure: '概念説明→例示→演習→プロジェクト適用',
                progression: '知識の積み上げ式構造、適切な難易度カーブ'
            },
            constraints: [
                'プログラミング未経験者でも理解できる平易な説明を心がけること',
                '業務効率化に直結する実例を多く含めること',
                '1セッション15-30分で完了できる長さに各レッスンを設計すること',
                'モバイル端末でも学習可能な形式にすること',
                '専門用語は必ず平易な言葉で補足説明すること',
                '挫折しないよう適切な難易度設計を行うこと'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- コース全体の構造と学習目標\n- 各レッスンの詳細概要\n- サンプルレッスンの完全な内容（説明、例、演習問題）\n- 視覚的教材のサンプル（図解の説明）\n- ミニプロジェクトの詳細仕様\n- 学習者の典型的なつまずきポイントと解決法\n- 継続学習のためのリソースリスト',
            style: '親しみやすく励みになる口調を使いつつ、概念説明は正確かつ明快に。専門用語を使う場合は必ず平易な言葉での言い換えも提示。「なぜそうするのか」の背景説明を重視。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Documentation Generator Template
    {
        id: 'documentation',
        name: 'ドキュメント生成',
        data: {
            role: '技術ドキュメント作成者',
            outputImage: 'オープンソースプロジェクトの包括的な技術ドキュメント',
            background: '開発したライブラリやAPIの利用促進と適切な活用を目的とした、開発者向けの技術ドキュメントを作成したい',
            goalElements: [
                '明確な概要と使用目的の説明',
                'インストール・セットアップ手順',
                'API仕様の詳細（メソッド、パラメータ、戻り値）',
                '基本的な使用例とベストプラクティス',
                '高度な利用シナリオとサンプルコード',
                'トラブルシューティングガイド',
                'パフォーマンス最適化のヒント',
                '貢献ガイドラインと開発環境のセットアップ'
            ],
            sharedImage: '- MDNのような明確で構造化された説明\n- React公式ドキュメントのような実用例と理論のバランス\n- GitHubのドキュメントのようなクリアな手順\n- Stripeドキュメントのようなインタラクティブな例示\n- Tailwind CSSのような視覚的に優れた表現',
            workInstructions: [
                'ドキュメントの全体構造とナビゲーションを設計する',
                'インストールとセットアップのステップバイステップガイドを作成する',
                'API仕様を詳細かつ明確に記述する',
                '基本から応用までの使用例を実装する',
                'よくある質問とトラブルシューティングセクションを作成する',
                'コミュニティ貢献のためのガイドラインを定義する',
                'サンプルコードとスニペットのテスト済みの例を提供する'
            ],
            techSpecs: {
                format: 'Markdown/MDX形式、静的サイトジェネレーター対応',
                codeExamples: '構文ハイライト、実行可能なサンプル',
                versioning: 'ドキュメントバージョン管理、変更履歴',
                search: '全文検索機能、インデックス最適化'
            },
            uiSpecs: {
                navigation: '階層的なサイドバーナビ、ブレッドクラム',
                interaction: 'コードコピーボタン、編集提案リンク',
                responsive: 'モバイル対応レイアウト、閲覧性最適化'
            },
            designSpecs: {
                layout: 'クリーンな2カラムレイアウト（ナビ+コンテンツ）',
                typography: '読みやすいフォント、適切な行間、見出し階層',
                codeBlocks: '構文ハイライト、ダーク/ライトテーマ対応'
            },
            layoutSpecs: {
                structure: '階層的なセクション構造、論理的な情報配置',
                progression: '基本から応用へと進むフロー、独立参照可能な形式'
            },
            constraints: [
                '初心者から上級者まで幅広いスキルレベルに対応すること',
                'コードスニペットは実際に動作確認済みであること',
                'SEO対策として適切な見出し構造とメタデータを含めること',
                '国際的な開発者に配慮し、シンプルな英語で記述すること（または多言語対応）',
                'アクセシビリティガイドラインに準拠すること',
                '定期的な更新を前提とした保守性の高い構造にすること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- ドキュメント全体の構造と目次\n- 「はじめに」セクションのサンプル\n- インストール・セットアップガイドのサンプル\n- API仕様のサンプル（主要メソッド/機能の詳細）\n- 基本的な使用例のサンプルコード\n- 高度な使用例のサンプルコード\n- トラブルシューティングセクションのサンプル\n- 貢献ガイドラインのサンプル',
            style: '明確で直接的、かつ友好的な口調。説明は簡潔でありながら十分な詳細を含み、コード例には常に目的と機能の説明を付ける。概念的な説明と実践的な例のバランスを重視。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Data Analysis Template
    {
        id: 'data-analysis',
        name: 'データ分析',
        data: {
            role: 'データアナリスト/データサイエンティスト',
            outputImage: 'ビジネスデータの包括的分析レポートと可視化',
            background: '企業の売上、顧客行動、マーケティング効果などのデータを分析し、ビジネス意思決定に役立つインサイトを抽出したい',
            goalElements: [
                'データ概要と品質評価',
                '探索的データ分析（EDA）と基本統計',
                'トレンド分析と時系列パターン',
                'セグメント分析と顧客分類',
                '相関分析と因果関係の考察',
                '予測モデルと将来予測',
                'アクショナブルなビジネスインサイト',
                '効果的なデータ可視化'
            ],
            sharedImage: '- Harvard Business Reviewの分析レポートのような論理的構造\n- Kaggleの上位ノートブックのような明確なコードと解説\n- Tableauダッシュボードのような効果的な可視化\n- McKinseyレポートのような実用的なビジネスインサイト\n- 経営層にも理解しやすい表現と専門家も納得する分析深度のバランス',
            workInstructions: [
                'データの前処理と品質評価のプロセスを設計する',
                '探索的データ分析（EDA）の手法と実装を提案する',
                '主要な統計的分析手法とコードを提供する',
                '機械学習モデル（必要に応じて）の選定と実装を行う',
                'ビジネスインサイトを抽出し明確に説明する',
                '効果的なデータ可視化を設計する',
                '分析結果に基づく具体的な推奨事項をまとめる'
            ],
            techSpecs: {
                languages: 'Python（Pandas, NumPy, Scikit-learn）',
                visualization: 'Matplotlib, Seaborn, Plotly',
                analysis: '統計的検定、回帰分析、クラスタリング',
                optional: '機械学習モデル、時系列分析、NLP'
            },
            uiSpecs: {
                notebooks: 'Jupyter Notebookベースの分析フロー',
                visualization: 'インタラクティブグラフ、ダッシュボード要素',
                reporting: 'エグゼクティブサマリー、詳細分析セクション'
            },
            designSpecs: {
                charts: 'カラーパレット統一、適切なチャートタイプ選定',
                layout: '論理的なレポート構造、重要ポイントの強調',
                presentation: 'ストーリーテリングアプローチ、主要な発見の視覚化'
            },
            layoutSpecs: {
                structure: '問題定義→データ概要→分析→結果→推奨事項',
                flow: '論理的な分析ステップの流れ、再現可能な構造'
            },
            constraints: [
                'コードの再現性と可読性を確保すること',
                '統計的に正確な手法と適切な解釈を行うこと',
                'ビジネス用語と技術的説明のバランスを取ること',
                'データプライバシーとセキュリティを考慮すること',
                '分析の限界と制約を明示すること',
                '経営層の意思決定に役立つアクショナブルな洞察を提供すること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- エグゼクティブサマリー\n- 分析目的と背景\n- データ概要と前処理手順\n- 探索的データ分析の結果と主要な発見\n- 詳細分析のプロセスとコード\n- 重要なビジネスインサイト\n- データ可視化（グラフ、チャートの説明）\n- 推奨事項と次のステップ\n- 付録：使用した技術的手法の詳細',
            style: '論理的で根拠に基づいた説明を行いつつ、非技術者にも理解可能な表現を心がける。技術的詳細は必要に応じて提供しながら、ビジネス価値と実用的なインサイトを強調する。',
            allowQuestions: true,
            allowModifications: true
        }
    },

    // Minimal Template
    {
        id: 'minimal',
        name: '最小構成テンプレート',
        data: {
            role: 'システム開発者',
            outputImage: 'シンプルかつ効率的なWebアプリケーション',
            background: '最小限の構成で機能的なシステムを素早く開発したい',
            goalElements: [
                '基本機能の実装',
                '直感的なUI',
                'パフォーマンスの最適化',
                'セキュリティ対策'
            ],
            sharedImage: '- モダンでクリーンなデザイン\n- 必要最低限の機能に絞ったインターフェース',
            workInstructions: [
                'システム要件を整理する',
                '基本設計を行う',
                '実装コードを提供する',
                'テスト方法を提案する'
            ],
            techSpecs: {
                frontend: 'React、TailwindCSS',
                backend: 'Node.js、Express',
                database: 'SQLite/PostgreSQL',
                deployment: 'Vercel/Netlify'
            },
            uiSpecs: {
                design: 'シンプルで直感的なUI',
                responsive: 'モバイルファースト設計'
            },
            designSpecs: {
                colors: 'モノクロ基調、アクセントカラーを最小限に',
                layout: 'シンプルな構造、余白を活用'
            },
            layoutSpecs: {
                structure: 'ヘッダー、メインコンテンツ、フッターの基本構造',
                navigation: '直感的なナビゲーション'
            },
            constraints: [
                'シンプルで理解しやすいコードにすること',
                '必要最低限の機能に絞ること',
                'パフォーマンスを優先すること',
                '将来の拡張性を考慮すること'
            ],
            outputFormat: 'Markdown形式で、以下を含める:\n- 要件の整理\n- 基本設計の概要\n- 実装コード\n- テスト方法\n- デプロイ手順',
            style: '簡潔で明瞭な技術的説明。冗長な表現を避け、必要な情報を直接的に提供する。',
            allowQuestions: true,
            allowModifications: true
        }
    }
];

const PMFApp = () => {
    // State management remains unchanged
    const [pmfData, setPmfData] = useState({
        role: '',
        outputImage: '',
        background: '',
        goalElements: [''],
        sharedImage: '',
        workInstructions: [''],
        techSpecs: {
            frontend: '',
            backend: '',
            database: '',
            infrastructure: ''
        },
        uiSpecs: {
            interaction: '',
            responsive: '',
            accessibility: ''
        },
        designSpecs: {
            font: '',
            colors: '',
            style: ''
        },
        layoutSpecs: {
            pageStructure: '',
            componentPlacement: ''
        },
        constraints: [''],
        outputFormat: '',
        style: '',
        allowQuestions: true,
        allowModifications: true
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isPromptGenerated, setIsPromptGenerated] = useState(false);

    // Original functions remain unchanged
    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);
    const startOver = () => {
        setPmfData({
            role: '',
            outputImage: '',
            background: '',
            goalElements: [''],
            sharedImage: '',
            workInstructions: [''],
            techSpecs: {
                frontend: '',
                backend: '',
                database: '',
                infrastructure: ''
            },
            uiSpecs: {
                interaction: '',
                responsive: '',
                accessibility: ''
            },
            designSpecs: {
                font: '',
                colors: '',
                style: ''
            },
            layoutSpecs: {
                pageStructure: '',
                componentPlacement: ''
            },
            constraints: [''],
            outputFormat: '',
            style: '',
            allowQuestions: true,
            allowModifications: true
        });
        setCurrentStep(0);
        setIsPromptGenerated(false);
    };
    const handleAddItem = (field) => {
        setPmfData({
            ...pmfData,
            [field]: [...pmfData[field], '']
        });
    };
    const handleRemoveItem = (field, index) => {
        setPmfData({
            ...pmfData,
            [field]: pmfData[field].filter((_, i) => i !== index)
        });
    };
    const handleArrayItemChange = (field, index, value) => {
        const newArray = [...pmfData[field]];
        newArray[index] = value;
        setPmfData({
            ...pmfData,
            [field]: newArray
        });
    };
    const handleInputChange = (field, value) => {
        setPmfData({
            ...pmfData,
            [field]: value
        });
    };

    // Handle nested object changes
    const handleNestedChange = (parentField, field, value) => {
        setPmfData({
            ...pmfData,
            [parentField]: {
                ...pmfData[parentField],
                [field]: value
            }
        });
    };

    const generatePrompt = () => {
        const prompt = `あなたは${pmfData.role}のプロフェッショナルです。
以下の依頼に正確かつ丁寧に応えてください。

【1.成果物イメージ】
→${pmfData.outputImage}

【2.背景と目的】
→${pmfData.background}

【3.ゴール逆算】
→${pmfData.goalElements.filter(item => item).map(item => `- ${item}`).join('\n')}

【4.イメージ共有】
→${pmfData.sharedImage}

【5.作業指示】
→${pmfData.workInstructions.filter(item => item).map((item, index) => `${index + 1}. ${item}`).join('\n')}

【6.技術仕様】
→フロントエンド: ${pmfData.techSpecs.frontend}
→バックエンド: ${pmfData.techSpecs.backend}
→データベース: ${pmfData.techSpecs.database}
→インフラ: ${pmfData.techSpecs.infrastructure}

【7.UI/UX仕様】
→インタラクション: ${pmfData.uiSpecs.interaction}
→レスポンシブ: ${pmfData.uiSpecs.responsive}
→アクセシビリティ: ${pmfData.uiSpecs.accessibility}

【8.デザイン仕様】
→フォント: ${pmfData.designSpecs.font}
→カラー: ${pmfData.designSpecs.colors}
→スタイル: ${pmfData.designSpecs.style}

【9.レイアウト構成】
→ページ構造: ${pmfData.layoutSpecs.pageStructure}
→コンポーネント配置: ${pmfData.layoutSpecs.componentPlacement}

【10.条件・制約】
→${pmfData.constraints.filter(item => item).map(item => `- ${item}`).join('\n')}

【11.出力形式指定】
→${pmfData.outputFormat}

【12.スタイル・トーン】
→${pmfData.style}

${pmfData.allowQuestions ? '【13.予備質問許可】\n→不明点あれば質問してください。' : ''}

${pmfData.allowModifications ? '【14.テスト＆微修正】\n→初回の提案を確認後、必要に応じて調整を依頼します。' : ''}`;

        setGeneratedPrompt(prompt);
        setIsPromptGenerated(true);
        nextStep();
    };

    // Helper function to copy text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                // You could set a state here to show a brief "Copied!" message
                console.log("Copied to clipboard");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    // Enhanced steps definition - すべてのステップをここに定義
    const steps = [
        // Step 1: Introduction - improved styling
        {
            title: "PMF法プロンプトビルダー",
            content: (
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-blue-800">PMF法（Prompt Master Frame）とは</h2>
                    <p className="mb-4 text-gray-700">AIとのコミュニケーションを最適化し、意図した成果を最大限に引き出すための次世代プロンプト設計メソッドです。</p>

                    <div className="mb-6">
                        <h3 className="font-bold mb-3 text-gray-800">PMF法の13の構成要素:</h3>
                        <ol className="list-decimal space-y-2 pl-5">
                            <li className="text-gray-700"><span className="font-medium text-gray-900">成果物イメージ</span>: 最終的に欲しい成果物の具体的描写</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">背景と目的</span>: 依頼理由・目的</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">ゴール逆算</span>: 成果物から逆算した必要要素</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">イメージ共有</span>: デザイン、雰囲気、対象ユーザー像などの共有</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">作業指示</span>: 明確な具体的指示</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">技術仕様</span>: 使用技術、フレームワーク、ライブラリ等</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">UI/UX仕様</span>: インタラクション、レスポンシブ対応、アクセシビリティ</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">デザイン仕様</span>: フォント、カラー、スタイル</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">レイアウト構成</span>: ページ構造、コンポーネント配置</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">条件・制約</span>: 守るべき条件</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">出力形式指定</span>: 成果物の形式</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">スタイル・トーン</span>: 使用言語のトーン</li>
                            <li className="text-gray-700"><span className="font-medium text-gray-900">テスト＆微修正</span>: アウトプット後の修正依頼</li>
                        </ol>
                    </div>

                    <p className="mb-6 text-gray-700">このアプリでは、各要素を順番に入力することで、効果的なプロンプトを簡単に作成できます。</p>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h3 className="font-bold mb-2 text-yellow-800">プロンプト作成のコツ:</h3>
                        <ul className="list-disc space-y-1 pl-5">
                            <li className="text-gray-700">具体的に記述する（抽象的な表現は避ける）</li>
                            <li className="text-gray-700">明確な指示を与える</li>
                            <li className="text-gray-700">必要な条件や制約を明記する</li>
                            <li className="text-gray-700">成果物のイメージを具体的に伝える</li>
                            <li className="text-gray-700">技術仕様とデザイン要件を詳細に記述する</li>
                        </ul>
                    </div>
                </div>
            ),
            actions: (
                <button
                    onClick={nextStep}
                    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                >
                    始める
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            )
        },

        // Step 2: Template Selection - improved cards and hover effects
        {
            title: "テンプレート選択",
            content: (
                <div>
                    <p className="text-gray-600 mb-6">プロフェッショナルなテンプレートから始めるか、白紙から作成できます。</p>

                    <div className="mb-6">
                        <div
                            className="flex items-center p-4 mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 cursor-pointer transition-all shadow-sm"
                            onClick={() => {
                                setPmfData({ ...pmfData });
                                nextStep();
                            }}
                        >
                            <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-bold text-gray-800">テンプレートなし</h4>
                                <p className="text-sm text-gray-600">白紙から新規作成</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4 text-gray-800">業種別テンプレート</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {templates.map(template => (
                            <div
                                key={template.id}
                                className="flex flex-col p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
                                onClick={() => {
                                    setPmfData({ ...template.data });
                                    nextStep();
                                }}
                            >
                                <h4 className="font-bold text-gray-800 mb-1">{template.name}</h4>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{template.data.background}</p>
                                <div className="mt-auto pt-2 flex justify-end">
                                    <span className="text-blue-600 text-sm flex items-center">
                                        選択する
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ),
            actions: (
                <button
                    onClick={prevStep}
                    className="px-4 py-2 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition"
                >
                    トップに戻る
                </button>
            )
        },

        // Step 3: Role Definition - improved input field
        {
            title: "AIの役割定義",
            content: (
                <div>
                    <div className="mb-4">
                        <h3 className="font-bold text-gray-800 mb-2">AIに与える役割:</h3>
                        <p className="text-sm text-gray-600 mb-3">例: "フルスタックWeb開発者", "データベース設計", "プログラミング教育" など</p>
                        <div className="relative">
                            <input
                                type="text"
                                value={pmfData.role}
                                onChange={(e) => handleInputChange('role', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="プロフェッショナルな役割を入力してください"
                            />
                            {pmfData.role.length > 0 && (
                                <span className="absolute right-3 top-3 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 4: Output Image - improved textarea
        {
            title: "1. 成果物イメージ",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">最終的に欲しい成果物のイメージ:</h3>
                        <p className="text-sm text-gray-600 mb-3">具体的に何を作りたいのか、できるだけ詳細に記述してください。</p>
                        <textarea
                            value={pmfData.outputImage}
                            onChange={(e) => handleInputChange('outputImage', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows="4"
                            placeholder="例: オンライン予約システムのアーキテクチャ設計と主要コンポーネントの実装コード"
                        ></textarea>
                        <div className="mt-2 flex justify-end">
                            <span className="text-xs text-gray-500">
                                {pmfData.outputImage.length > 0 ? `${pmfData.outputImage.length} 文字` : ''}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 5: Background and Purpose - improved textarea
        {
            title: "2. 背景と目的",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">背景と目的:</h3>
                        <p className="text-sm text-gray-600 mb-3">なぜこの成果物が必要なのか、何のために使うのかを簡潔に説明してください。</p>
                        <textarea
                            value={pmfData.background}
                            onChange={(e) => handleInputChange('background', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows="4"
                            placeholder="例: 小規模な美容サロン向けにシンプルで導入しやすい予約システムを開発したい"
                        ></textarea>
                        <div className="mt-2 flex justify-end">
                            <span className="text-xs text-gray-500">
                                {pmfData.background.length > 0 ? `${pmfData.background.length} 文字` : ''}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 6: Goal Elements - improved list inputs
        {
            title: "3. ゴール逆算",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">成果に必要な要素:</h3>
                        <p className="text-sm text-gray-600 mb-3">成果物に必要な要素や機能をリスト化してください。</p>

                        <div className="space-y-3 mb-4">
                            {pmfData.goalElements.map((element, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-xs text-blue-800 font-medium">{index + 1}</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={element}
                                        onChange={(e) => handleArrayItemChange('goalElements', index, e.target.value)}
                                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder={`要素 ${index + 1}`}
                                    />
                                    <button
                                        onClick={() => handleRemoveItem('goalElements', index)}
                                        className="ml-2 p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors"
                                        disabled={pmfData.goalElements.length === 1}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={() => handleAddItem('goalElements')}
                                className="mt-4 flex items-center px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                要素を追加
                            </button>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 7: Shared Image - improved textarea
        {
            title: "4. イメージ共有",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">イメージ共有:</h3>
                        <p className="text-sm text-gray-600 mb-3">デザインの雰囲気、参考にしたい既存のものなど、イメージを言語で伝えてください。</p>
                        <textarea
                            value={pmfData.sharedImage}
                            onChange={(e) => handleInputChange('sharedImage', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows="4"
                            placeholder="例: ターゲットは技術知識の少ないサロンオーナー。シンプルなUI、直感的な操作性。デザインはミニマルで洗練された印象。"
                        ></textarea>
                        <div className="mt-2 text-xs text-gray-500 flex justify-between">
                            <span>箇条書き（- 項目）の形式も使えます</span>
                            <span>{pmfData.sharedImage.length > 0 ? `${pmfData.sharedImage.length} 文字` : ''}</span>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 8: Work Instructions - improved list inputs
        {
            title: "5. 作業指示",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">作業指示:</h3>
                        <p className="text-sm text-gray-600 mb-3">具体的に何をしてほしいのか、名詞+動詞の形で明確に指示してください。</p>

                        <div className="space-y-3 mb-4">
                            {pmfData.workInstructions.map((instruction, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 text-blue-800 font-medium">
                                        {index + 1}
                                    </div>
                                    <input
                                        type="text"
                                        value={instruction}
                                        onChange={(e) => handleArrayItemChange('workInstructions', index, e.target.value)}
                                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder={`指示 ${index + 1}`}
                                    />
                                    <button
                                        onClick={() => handleRemoveItem('workInstructions', index)}
                                        className="ml-2 p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors"
                                        disabled={pmfData.workInstructions.length === 1}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={() => handleAddItem('workInstructions')}
                                className="mt-4 flex items-center px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                指示を追加
                            </button>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // 技術仕様ステップ
        {
            title: "6. 技術仕様",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">技術仕様:</h3>
                        <p className="text-sm text-gray-600 mb-3">使用する技術スタックや実装に関する詳細を指定してください。</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">フロントエンド:</label>
                                <input
                                    type="text"
                                    value={pmfData.techSpecs.frontend}
                                    onChange={(e) => handleNestedChange('techSpecs', 'frontend', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: React 18, TailwindCSS, TypeScript"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">バックエンド:</label>
                                <input
                                    type="text"
                                    value={pmfData.techSpecs.backend}
                                    onChange={(e) => handleNestedChange('techSpecs', 'backend', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: Node.js, Express, GraphQL"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">データベース:</label>
                                <input
                                    type="text"
                                    value={pmfData.techSpecs.database}
                                    onChange={(e) => handleNestedChange('techSpecs', 'database', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: PostgreSQL, Redis, MongoDB"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">インフラ:</label>
                                <input
                                    type="text"
                                    value={pmfData.techSpecs.infrastructure}
                                    onChange={(e) => handleNestedChange('techSpecs', 'infrastructure', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: AWS, Docker, CI/CD"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // UI/UX仕様ステップ
        {
            title: "7. UI/UX仕様",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">UI/UX仕様:</h3>
                        <p className="text-sm text-gray-600 mb-3">ユーザーインターフェースやユーザー体験に関する詳細を指定してください。</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">インタラクション:</label>
                                <input
                                    type="text"
                                    value={pmfData.uiSpecs.interaction}
                                    onChange={(e) => handleNestedChange('uiSpecs', 'interaction', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: ドラッグ&ドロップ操作、アニメーション、リアルタイム更新"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">レスポンシブ:</label>
                                <input
                                    type="text"
                                    value={pmfData.uiSpecs.responsive}
                                    onChange={(e) => handleNestedChange('uiSpecs', 'responsive', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: モバイルファースト、タブレット対応、ブレイクポイント"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">アクセシビリティ:</label>
                                <input
                                    type="text"
                                    value={pmfData.uiSpecs.accessibility}
                                    onChange={(e) => handleNestedChange('uiSpecs', 'accessibility', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: スクリーンリーダー対応、キーボード操作、色覚対応"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // デザイン仕様ステップ
        {
            title: "8. デザイン仕様",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">デザイン仕様:</h3>
                        <p className="text-sm text-gray-600 mb-3">視覚的なデザイン要素に関する詳細を指定してください。</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">フォント:</label>
                                <input
                                    type="text"
                                    value={pmfData.designSpecs.font}
                                    onChange={(e) => handleNestedChange('designSpecs', 'font', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: Noto Sans JP, Roboto, システムフォント"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">カラー:</label>
                                <input
                                    type="text"
                                    value={pmfData.designSpecs.colors}
                                    onChange={(e) => handleNestedChange('designSpecs', 'colors', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: ブルー基調、ダークモード対応、アクセントカラー"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">スタイル:</label>
                                <input
                                    type="text"
                                    value={pmfData.designSpecs.style}
                                    onChange={(e) => handleNestedChange('designSpecs', 'style', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: ミニマリスト、フラットデザイン、マテリアルデザイン"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // レイアウト構成ステップ
        {
            title: "9. レイアウト構成",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">レイアウト構成:</h3>
                        <p className="text-sm text-gray-600 mb-3">画面やページの構造に関する詳細を指定してください。</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ページ構造:</label>
                                <input
                                    type="text"
                                    value={pmfData.layoutSpecs.pageStructure}
                                    onChange={(e) => handleNestedChange('layoutSpecs', 'pageStructure', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: ヘッダー、サイドバー、メインコンテンツ、フッター"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">コンポーネント配置:</label>
                                <input
                                    type="text"
                                    value={pmfData.layoutSpecs.componentPlacement}
                                    onChange={(e) => handleNestedChange('layoutSpecs', 'componentPlacement', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="例: グリッドレイアウト、カード配置、セクション分け"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },
        {
            title: "10. 条件・制約",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">条件・制約:</h3>
                        <p className="text-sm text-gray-600 mb-3">守るべき条件や避けるべき事項を列挙してください。</p>

                        <div className="space-y-3 mb-4">
                            {pmfData.constraints.map((constraint, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={constraint}
                                        onChange={(e) => handleArrayItemChange('constraints', index, e.target.value)}
                                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder={`条件・制約 ${index + 1}`}
                                    />
                                    <button
                                        onClick={() => handleRemoveItem('constraints', index)}
                                        className="ml-2 p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors"
                                        disabled={pmfData.constraints.length === 1}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={() => handleAddItem('constraints')}
                                className="mt-4 flex items-center px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                条件を追加
                            </button>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 10: Output Format - improved textarea
        {
            title: "11. 出力形式指定",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">出力形式指定:</h3>
                        <p className="text-sm text-gray-600 mb-3">どのような形式で出力してほしいかを指定してください。</p>
                        <div className="bg-gray-50 p-2 rounded-lg mb-3">
                            <div className="text-xs text-gray-600 mb-1">よく使われる形式:</div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => handleInputChange('outputFormat', 'Markdown形式で、以下を含める:\n- アーキテクチャ図\n- 技術スタックの選定理由\n- サンプルコード\n- 実装手順の概要')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    Markdown形式
                                </button>
                                <button
                                    onClick={() => handleInputChange('outputFormat', 'HTML形式で、以下を含める:\n- 魅力的な導入部\n- 構造化された見出し\n- コードスニペット\n- まとめ')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    HTML形式
                                </button>
                                <button
                                    onClick={() => handleInputChange('outputFormat', 'JSON形式で、APIレスポンスとして使用できる構造にする')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    JSON形式
                                </button>
                            </div>
                        </div>
                        <textarea
                            value={pmfData.outputFormat}
                            onChange={(e) => handleInputChange('outputFormat', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows="4"
                            placeholder="例: Markdown形式で、アーキテクチャ図、技術スタックの選定理由、主要コンポーネントのサンプルコード、データベース設計図を含めること"
                        ></textarea>
                        <div className="mt-2 flex justify-end">
                            <span className="text-xs text-gray-500">
                                {pmfData.outputFormat.length > 0 ? `${pmfData.outputFormat.length} 文字` : ''}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 11: Style and Tone - improved textarea with suggestions
        {
            title: "12. スタイル・トーン",
            content: (
                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">スタイル・トーン:</h3>
                        <p className="text-sm text-gray-600 mb-3">文章のトーンや雰囲気（例：カジュアル、論理的、丁寧、専門的など）を指定してください。</p>

                        <div className="bg-gray-50 p-2 rounded-lg mb-3">
                            <div className="text-xs text-gray-600 mb-1">スタイル例:</div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => handleInputChange('style', '技術的に正確でありながら、非エンジニアにも理解しやすい説明')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    技術的かつ分かりやすい
                                </button>
                                <button
                                    onClick={() => handleInputChange('style', '論理的で体系的、専門用語を使用する場合は必要に応じて解説を付ける')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    論理的・体系的
                                </button>
                                <button
                                    onClick={() => handleInputChange('style', 'フレンドリーで親しみやすい口調、専門的すぎない言葉遣い')}
                                    className="text-xs bg-white py-1 px-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    フレンドリー
                                </button>
                            </div>
                        </div>

                        <textarea
                            value={pmfData.style}
                            onChange={(e) => handleInputChange('style', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows="3"
                            placeholder="例: 技術的に正確でありながら、非エンジニアにも理解しやすい説明"
                        ></textarea>
                        <div className="mt-2 flex justify-end">
                            <span className="text-xs text-gray-500">
                                {pmfData.style.length > 0 ? `${pmfData.style.length} 文字` : ''}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={nextStep}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                    >
                        次へ
                    </button>
                </>
            )
        },

        // Step 12: Optional Flags - improved checkboxes
        {
            title: "13. オプション設定",
            content: (
                <div className="mb-6 space-y-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors shadow-sm">
                        <label className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    checked={pmfData.allowQuestions}
                                    onChange={(e) => handleInputChange('allowQuestions', e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <span className="font-medium text-gray-800">AIからの質問を許可</span>
                                <p className="text-gray-600 mt-1">不明点や曖昧な点があれば、AIが質問できるようにします。より正確な成果物を得るために推奨します。</p>
                            </div>
                        </label>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors shadow-sm">
                        <label className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    checked={pmfData.allowModifications}
                                    onChange={(e) => handleInputChange('allowModifications', e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <span className="font-medium text-gray-800">修正依頼の許可</span>
                                <p className="text-gray-600 mt-1">初回の出力内容に対して、必要があれば微調整や変更を依頼できるようにします。より満足度の高い成果物を得るために推奨します。</p>
                            </div>
                        </label>
                    </div>
                </div>
            ),
            actions: (
                <>
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 shadow-sm"
                    >
                        戻る
                    </button>
                    <button
                        onClick={generatePrompt}
                        className="ml-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        プロンプトを生成
                    </button>
                </>
            )
        },

        // Step 13: Result Display - improved with copy button and styling
        {
            title: "プロンプト生成完了",
            content: (
                <div>
                    {isPromptGenerated ? (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-gray-800">生成されたプロンプト:</h3>
                                <button
                                    onClick={() => copyToClipboard(generatedPrompt)}
                                    className="flex items-center text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                    </svg>
                                    コピー
                                </button>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 overflow-auto max-h-96">
                                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">{generatedPrompt}</pre>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <p className="text-blue-800 mb-4 sm:mb-0 text-sm">このプロンプトをAIに入力して、高品質な成果物を得ましょう！</p>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => copyToClipboard(generatedPrompt)}
                                        className="px-3 py-2 bg-white border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                                    >
                                        プロンプトをコピー
                                    </button>
                                    <button
                                        onClick={startOver}
                                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                    >
                                        新しいプロンプトを作成
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                            <p>プロンプトを生成中...</p>
                        </div>
                    )}
                </div>
            ),
            actions: null
        }
    ];

    // Main render
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Progress bar */}
            {currentStep > 0 && currentStep < steps.length - 1 && (
                <div className="px-6 pt-6">
                    <div className="mb-2 flex justify-between text-xs text-gray-500">
                        <span>ステップ {currentStep}/{steps.length - 2}</span>
                        <span>{Math.round((currentStep / (steps.length - 2)) * 100)}% 完了</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${(currentStep / (steps.length - 2)) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Step title */}
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">{steps[currentStep].title}</h2>
            </div>

            {/* Step content */}
            <div className="p-6">
                {steps[currentStep].content}
            </div>

            {/* Action buttons */}
            {steps[currentStep].actions && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-2">
                    {steps[currentStep].actions}
                </div>
            )}
        </div>
    );
};

export default PMFApp;