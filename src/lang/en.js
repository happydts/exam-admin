export default {
  route: {
    dashboard: 'Dashboard',
    auth: 'Authenticate',
    monitor: 'Monitor',
    monitorApp: 'MonitorApp',
    monitorTrace: 'MonitorTrace',
    registerCenter: 'RegisterCenter',
    configCenter: 'ConfigCenter',
    environment: 'Environment',
    environmentParam: 'Parameter',
    encryption: 'Encryption',
    project: 'Project',
    config: 'Configuration',
    user: 'User',
    role: 'Role',
    permission: 'Permission',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    userCenter: 'User Center',
    admin: 'Administrator',
    teacher: 'Teacher',
    student: 'Student',
    questionCenter: 'Question Bank',
    subject: 'Subject',
    type: 'Question Type',
    point: 'Knowledge Point',
    tag: 'Question Tag',
    toolCenter: 'Tool Center',
    codeGenerator: 'Code Generator',
    question: 'Question'
  },
  common: {
    chooseIcon: 'Choose a icon',
    sort: 'The smaller the serial number, the higher the front',
    chooseParent: 'Choose parent',
    addMenu: 'Add Menu',
    editMenu: 'Edit Menu'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    roleName: 'RoleName',
    menuName: 'MenuName',
    menuIcon: 'MenuIcon',
    menuSort: 'MenuSort',
    iframe: 'Inner menu',
    permission: 'Permission',
    url: 'Link',
    parent: 'Parent',
    description: 'Description',
    creator: 'Creator',
    roleValue: 'RoleValue',
    createTime: 'CreateTime',
    active: 'Active',
    enable: 'Enable',
    disable: 'Disable',
    userName: 'UserName',
    userType: 'UserType',
    modifyPwd: 'ModifyPassword',
    assignRole: 'Assign Role',
    resetPwd: 'ResetPassword',
    password: 'Old Password',
    newPwd: 'New Password',
    confirmPwd: 'Confirm Password',
    prohibit: 'Prohibit',
    envName: 'Env Name',
    registryAddress: 'Registry Address',
    configServerName: 'Config Server Name',
    contextPath: 'Config Server ContextPath',
    paramKey: 'Param Key',
    paramValue: 'Param Value',
    encryptionName: 'Encryption Name',
    projectName: 'Project Name',
    deployEnv: 'Deploy Environment',
    deployLabel: 'Deploy Label',
    labelHint: 'Please input project label:',
    projectInfo: 'Project Info:',
    configDetail: 'Configuration Detail:',
    fetchConfig: 'Fetch Configuration',
    tableModel: 'Table Model',
    yamlModel: 'YAML Model',
    iniModel: 'Property Model',
    addConfig: 'Add Config',
    save: 'Save',
    replace: 'Replace',
    replaceAll: 'Replace All',
    encryptionAll: 'Encryption All',
    encryptionKeyList: 'Encryption Key List',
    envParam: ' Env Param',
    fresh: 'Refresh',
    freshService: 'Service',
    realName: 'RealName',
    national: 'National',
    email: 'Email',
    tel: 'Tel',
    pointName: 'Knowledge Point',
    subjectName: 'Subject',
    tagName: 'Tag',
    typeName: 'Type',
    question: 'Question Name',
    questionContent: 'Question Content',
    creatorName: 'Creator'
  },
  tree: {
    icon: 'Icon',
    sort: 'Sort',
    url: 'Ling',
    permission: 'Permission',
    iframe: 'Inner',
    yes: 'Y',
    no: 'N'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  }
}
