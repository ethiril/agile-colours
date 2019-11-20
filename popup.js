// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let colourIssueCheckBox, hideSidebarCheckBox, issueSummaryCheckBox

document.addEventListener('DOMContentLoaded', function () {
    colourIssueCheckBox = document.getElementById('cb-colourissue');
    hideSidebarCheckBox = document.getElementById('cb-hidesidebar');
    issueSummaryCheckBox = document.getElementById('cb-issuesummary');

    function updateTogglesData () {
        chrome.storage.sync.set({toggles: {
            colourissue: colourIssueCheckBox.checked,
            hidesidebar: hideSidebarCheckBox.checked,
            issuesummary: issueSummaryCheckBox.checked
          }});
    }
    chrome.storage.sync.get('toggles', function(data) {
        colourIssueCheckBox.checked = data.toggles.colourissue;
        hideSidebarCheckBox.checked = data.toggles.hidesidebar;
        issueSummaryCheckBox.checked = data.toggles.issuesummary;
        colourIssueCheckBox.addEventListener('change', () => {
            updateTogglesData();
        });
        hideSidebarCheckBox.addEventListener('change', () => {
            updateTogglesData();
        });
        issueSummaryCheckBox.addEventListener('change', (event) => {
            updateTogglesData();
        });
    });
  });
